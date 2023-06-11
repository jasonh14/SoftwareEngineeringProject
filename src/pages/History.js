import React, { useState, useEffect } from "react";
import Navbar from "src/components/Navbar";
import sample from "src/assets/sample.jpg";
import Rating from "@mui/material/Rating";
import HistoryCard from "src/components/HistoryCard";
import { firestore } from "src/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import CircularProgress from "@mui/material/CircularProgress";

const History = () => {
  const [user, setUser] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserByUID = async (uid) => {
    const usersCollectionRef = collection(firestore, "users");

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
      console.log("uid", uid);
      const appointmentsCollectionRef = collection(firestore, "appointment");
      const queryRef = query(
        appointmentsCollectionRef,
        where("studentUid", "==", uid)
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
  } else {
    return (
      <div className="overflow-hidden">
        <div>
          <Navbar user={user} />
        </div>
        <div className="bg-[url('src/assets/bg.svg')] w-screen bg-cover bg-no-repeat overflow-hidden">
          <h1 className="font-gaegu text-6xl text-center font-bold sola-shadow py-9 bg-white md:bg-inherit">
            Appointment History
          </h1>
          {/* list of teachers */}
          <div className="md:grid md:grid-cols-3 flex flex-col gap-4 p-12">
            {appointments.map((data, idx) => (
              <HistoryCard
                key={idx}
                online={data.learningMode === "Online" ? true : false}
                history={data}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default History;
