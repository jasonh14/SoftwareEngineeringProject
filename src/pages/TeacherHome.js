import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mainIcon from "src/assets/mainIcon.svg";
import timothy from "src/assets/timothy.png";
import side from "src/assets/side_note.png";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "src/firebase";
import defPhoto from "src/assets/user.png";

const TeacherHome = () => {
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState("");
  console.log("username", username);

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
        setUsername(userData.name);
        setPhoto(userData.photo);

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
  };
  useEffect(() => {
    firstLoad();
  }, []);

  return (
    <div className="py-6 flex flex-col justify-center items-center">
      <Link to={`/teacher/profile/${username}`}>
        <div className="flex flex-row items-center gap-4 my-10 mx-16 px-5 py-4 absolute top-0 right-0 hover:bg-[#6619ff] rounded-full transition duration-200">
          <div className="h-12 w-12 overflow-hidden rounded-full border-4 border-[#D2AFFF]">
            <img src={photo ? photo : defPhoto} alt="foto" />
          </div>
          <div className="font-gaegu font-bold text-4xl">{username}</div>
        </div>
      </Link>

      <img src={mainIcon} alt="main icon" className="mt-[150px]" />

      <div className="font-gaegu font-bold flex flex-row justify-center items-center gap-4 w-full px-20">
        <Link to="/teacher/view-appointment">
          <div className="bg-[#D2AFFF] px-4 py-2 rounded-full cursor-pointer hover:bg-[#6619ff] transition duration-200">
            <p className="text-2xl">View Appointment</p>
          </div>
        </Link>
      </div>
      <img src={side} alt="side_note" className="absolute bottom-0 right-0" />
    </div>
  );
};

export default TeacherHome;
