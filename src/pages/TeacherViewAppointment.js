import React, { useState, useEffect } from "react";
import timothy from "src/assets/timothy.png";
import logo from "src/assets/smalllogo.png";
import { Link } from "react-router-dom";
import bg from "src/assets/bg_no_sola.png";
import CircularProgress from "@mui/material/CircularProgress";
import { firestore } from "src/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import defPhoto from "src/assets/user.png";

const TeacherViewAppointment = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [appointments, setAppointments] = useState([]);
  console.log("Uid", user.uid);

  const getUserByUID = async (uid) => {
    const usersCollectionRef = collection(firestore, "teachers");

    // Create a query to filter documents based on the UID field
    const q = query(usersCollectionRef, where("uid", "==", uid));

    try {
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size > 0) {
        // Assuming there's only one document matching the UID
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        // Access the user data
        console.log("User data:", userData);
        setUser(userData);

        // You can return the user data or perform other operations with it
        localStorage.setItem("userProfile", JSON.stringify(userData));
      } else {
        console.log("No user found with the given UID");
      }
    } catch (error) {
      console.error("Error retrieving user:", error);
    }
  };

  const fetchData = async () => {
    try {
      // Retrieve user data from local storage
      const userData = localStorage.getItem("userData");
      const { uid } = JSON.parse(userData);
      console.log(uid);
      getUserByUID(uid);
    } catch (err) {
      console.log(err);
    }
  };

  const getAppointments = async () => {
    try {
      const uid = JSON.parse(localStorage.getItem("userProfile")).uid;
      console.log("uid2", uid);
      const appointmentsCollectionRef = collection(firestore, "appointment");
      const queryRef = query(
        appointmentsCollectionRef,
        where("teacherUid", "==", uid)
      );

      const querySnapshot = await getDocs(queryRef);

      // const userDoc = querySnapshot.docs[0];
      // const userData = userDoc.data();
      // console.log("test", userData);

      const appointmentsData = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      console.log("appointment", appointmentsData);

      setAppointments(appointmentsData);
    } catch (error) {
      console.log("Error getting documents: ", error);
    }
  };

  const firstLoad = async () => {
    await fetchData();
    const localData = JSON.parse(localStorage.getItem("userProfile"));
    setUser(localData);
    await getAppointments();
    setLoading(false);
  };

  const formatDate = (seconds) => {
    const milliseconds = seconds * 1000; // Convert seconds to milliseconds
    const date = new Date(milliseconds);

    // Extract day, month, and year components
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
    const year = date.getFullYear().toString();

    return `${day}/${month}/${year}`;
  };

  function convertSecondsToHour(seconds) {
    let date = new Date(seconds * 1000); // Multiply by 1000 to convert to milliseconds

    let hours = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  useEffect(() => {
    firstLoad();

    getAppointments();
  }, []);

  if (loading) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <CircularProgress />
      </div>
    );
  } else
    return (
      <div className="bg-[url('src/assets/bg_no_sola.png')] bg-center  w-screen bg-cover bg-no-repeat">
        {/* Background */}
        {/* <img src={bg} alt="bg" className="absolute -z-50 top-0" /> */}
        {/* Navbar */}
        <div className="flex flex-row sticky bg-white justify-between font-gaegu h-[100px] shadow-lg p-6">
          {/* left */}
          <div className="flex flex-row gap-6">
            <Link to="/teacher/home">
              <div className="h-full">
                <img className="cursor-pointer h-full" src={logo} alt="logo" />
              </div>
            </Link>
            <Link to={"/teacher/view-appointment"}>
              <div className="bg-[#D2AFFF] px-4 py-2 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6619ff] transition duration-200">
                <p className="text-2xl">View Appointment</p>
              </div>
            </Link>
          </div>
          {/* right */}
          <Link to={`/teacher/profile/${user.name}`}>
            <div className="flex flex-row items-center gap-6 hover:bg-[#6619ff] rounded-full px-5">
              <p className="text-2xl font-semibold">{user.name}</p>
              <div className="h-12 w-12 overflow-hidden rounded-full border-4 border-[#D2AFFF]">
                <img
                  src={user.photo === "" ? defPhoto : user.photo}
                  alt="sample"
                />
              </div>
            </div>
          </Link>
        </div>
        {/* Table */}
        <div className="p-4">
          <table className=" z-20 rounded-xl relative mx-auto min-w-0 divide-y bg-[#e3cdff]  font-gaegu my-28">
            <thead className="rounded-xl">
              <tr>
                <th className="text-4xl px-12 py-6 rounded-t-xl bg-[#D2AFFF] text-center font-extrabold uppercase">
                  Student Name
                </th>
                <th className="text-4xl px-12 py-6 bg-[#D2AFFF] text-center font-extrabold uppercase">
                  Date
                </th>
                <th className="text-4xl px-12 py-6 bg-[#D2AFFF] text-center font-extrabold uppercase">
                  Time
                </th>
                <th className="text-4xl px-12 py-6 bg-[#D2AFFF] text-center font-extrabold uppercase">
                  Learning Mode
                </th>
                <th className="text-4xl px-12 py-6 rounded-t-xl bg-[#D2AFFF] text-center font-extrabold uppercase">
                  Zoom
                </th>
              </tr>
            </thead>
            <tbody className="">
              {appointments.map((data) => (
                <tr>
                  <td className="text-3xl px-12 py-8 text-black">
                    {data.studentName}
                  </td>
                  <td className="text-3xl px-12 py-8 text-black">
                    {formatDate(data.date)}
                  </td>
                  <td className="text-3xl px-12 py-8 text-black">
                    {convertSecondsToHour(data.time.seconds)}
                  </td>
                  <td className="text-3xl px-12 py-8 text-black">
                    {data.learningMode}
                  </td>
                  {data.learningMode === "Online" ? (
                    <Link
                      to={
                        "https://binus.zoom.us/j/93296129287?pwd=OHlJVzBCeThTWnkzNW5zK3N6V0lyZz09"
                      }
                      target="_blank"
                    >
                      <td className="cursor-pointer text-3xl px-12 py-8 text-black">
                        Start
                      </td>
                    </Link>
                  ) : (
                    <td className="text-3xl px-12 py-8 text-black">-</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default TeacherViewAppointment;
