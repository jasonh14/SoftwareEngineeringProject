import React, { useState, useEffect } from "react";
import timothy from "src/assets/timothy.png";
import logo from "src/assets/smalllogo.png";
import { Link } from "react-router-dom";
import bg from "src/assets/teacher_profile_bottom.png";
import banner from "src/assets/teacher_profileBanner.png";
import photoDef from "src/assets/user.png";
import EditTeacherProfile from "src/components/EditTeacherProfile";
import EditTeacherDescription from "src/components/EditTeacherDescription";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "src/firebase";

const TeacherProfile = () => {
  const [user, setUser] = useState({});
  const [showEdit, setShowEdit] = useState(false);
  const [showEditDesc, setShowEditDesc] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  console.log(user);

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

  const firstLoad = async () => {
    await fetchData();
    setLoading(false);
  };

  const handleLogout = async () => {
    const auth = getAuth();

    try {
      await signOut(auth);
      // Redirect to the desired page after successful logout
      navigate("/role");
      localStorage.clear();
    } catch (error) {
      console.error("Error logging out:", error);
    }
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

  const formatNumber = (number) => {
    const formattedNumber = number?.toLocaleString("en-US").replace(",", ".");

    return formattedNumber;
  };

  //   console.log(formatNumber(user.price));

  useEffect(() => {
    firstLoad();
    // const localData = JSON.parse(localStorage.getItem("userProfile"));
    // setUser(localData);
  }, []);

  if (loading) {
    return "loading";
  } else {
    return (
      <>
        {showEdit && (
          <EditTeacherProfile
            user={user}
            setShowEdit={setShowEdit}
            teacher={true}
          />
        )}
        {showEditDesc && (
          <EditTeacherDescription
            user={user}
            setShowEditDesc={setShowEditDesc}
          />
        )}
        <div>
          {/* Background */}
          <div className="relative">
            <img src={bg} alt="bg" className="absolute bottom-0" />
            <img src={banner} alt="bg" className="absolute top-0 w-auto" />
          </div>
          {/* Navbar */}
          <div className="flex flex-row sticky bg-white justify-between font-gaegu h-[100px] shadow-lg md:p-6">
            {/* left */}
            <div className="flex flex-row gap-6 items-center">
              <Link to="/teacher/home">
                <div className="w-full">
                  <img className="cursor-pointer w-full" src={logo} alt="" />
                </div>
              </Link>
              <Link to={"/teacher/view-appointment"}>
                <div className="bg-[#D2AFFF] px-4 py-2 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6619ff] transition duration-200">
                  <p className="md:text-2xl text-sm">View Appointment</p>
                </div>
              </Link>
            </div>
            {/* right */}
            <div className="flex flex-row items-center md:gap-6 hover:bg-[#6619ff] rounded-full px-5">
              <p className="text-2xl font-semibold">{user.name}</p>
              <div className="h-12 w-12 overflow-hidden rounded-full border-4 border-[#D2AFFF]">
                <img src={user.photo ? user.photo : photoDef} alt="sample" />
              </div>
            </div>
          </div>
          {/* Profile */}
          <div className="relative">
            <div className="w-screen h-[150px] bg-slate-400"></div>
            <div className="flex flex-col md:flex-row md:justify-start py-4 gap-12 items-center md:items-start">
              {/* photo */}
              <div className="flex-1 flex gap-4 flex-col items-end justify-center relative">
                <div className="flex flex-col gap-4 items-center">
                  <div className="mt-[-75px] bg-white w-[200px] h-[200px] flex justify-center overflow-hidden rounded-full border-4 border-[#D2AFFF]">
                    <img src={user.photo ? user.photo : photoDef} alt="foto" />
                  </div>
                  <div className="w-full bg-[#D2AFFF] p-2 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6619ff] transition duration-200">
                    <p onClick={handleLogout} className="text-2xl font-gaegu">
                      Logout
                    </p>
                  </div>
                </div>
              </div>
              {/* profile */}
              <div className="flex-1 font-gaegu flex items-start flex-col justify-start">
                <div className="flex md:justify-between justify-center md:items-start items-center w-full md:pr-12 mb-10">
                  <div className="d-none md:block text-white bg-black bg-opacity-40 rounded-full py-5 px-10">
                    <p className="text-3xl">Welcome,</p>
                    <h1 className="text-6xl font-semibold">{user?.name}</h1>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <span
                      onClick={() => setShowEdit(true)}
                      className=" bg-[#D2AFFF]  py-2 px-4 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6619ff] transition duration-200"
                    >
                      <p className="text-2xl font-gaegu">Edit Photo</p>
                    </span>
                    <span
                      onClick={() => setShowEditDesc(true)}
                      className=" bg-[#D2AFFF] py-2 px-4 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6619ff] transition duration-200"
                    >
                      <p className="text-2xl font-gaegu">Edit Description</p>
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl font-semibold">Profile</h1>
                  <p className="text-xl">
                    {user.desc === "" ? "-" : user?.desc}
                  </p>
                </div>
                <div>
                  <h1 className="text-3xl font-semibold">Price</h1>
                  <p className="text-xl">{formatNumber(user?.price)}</p>
                </div>
                <div>
                  <h1 className="text-3xl font-semibold">Gender</h1>
                  <p className="text-xl">{user?.gender}</p>
                </div>
                <div>
                  <h1 className="text-3xl font-semibold">Date of Birth</h1>
                  <p className="text-xl">{formatDate(user.date?.seconds)}</p>
                </div>
                <div>
                  <h1 className="text-3xl font-semibold">Email</h1>
                  <p className="text-xl">{user?.email}</p>
                </div>
                <div>
                  <h1 className="text-3xl font-semibold">City of Residence</h1>
                  <p className="text-xl">{user?.city}</p>
                </div>
                <div>
                  <h1 className="text-3xl font-semibold">Address</h1>
                  <p className="text-xl">{user?.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default TeacherProfile;
