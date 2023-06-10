import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mainIcon from "src/assets/mainIcon.svg";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "src/firebase";
import sample from "src/assets/sample.jpg";
import defPhoto from "src/assets/user.png";

const Main = () => {
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState("");
  // console.log(username);
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
    console.log("test");
    firstLoad();
  }, []);

  return (
    <div className="py-6 flex flex-col justify-center items-center">
      <div className="flex flex-row items-center gap-4 py-2">
        <Link to={`/profile/${username}`}>
          <div className="h-12 w-12 overflow-hidden rounded-full border-4 border-[#D2AFFF]">
            <img src={photo ? photo : sample} alt="foto" />
          </div>
        </Link>
        <div className="font-gaegu font-bold text-4xl">{username}</div>
      </div>

      <img src={mainIcon} alt="main icon" />

      <div className="font-gaegu font-bold flex flex-row justify-center items-center gap-4 w-full px-20">
        <Link to="/teachers">
          <div className="bg-[#D2AFFF] px-4 py-2 rounded-full cursor-pointer hover:bg-[#6619ff] transition duration-200">
            <p className="text-2xl">Teachers</p>
          </div>
        </Link>

        <Link to="/history">
          <div className="bg-[#D2AFFF] px-4 py-2 rounded-full cursor-pointer hover:bg-[#6619ff] transition duration-200">
            <p className="text-2xl">Appointment History</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
