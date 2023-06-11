import React, { useState, useEffect } from "react";
import Navbar from "src/components/Navbar";
import sample from "src/assets/sample.jpg";
import Rating from "@mui/material/Rating";
import TeacherCard from "src/components/TeacherCard";

import { firestore } from "src/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [user, setUser] = useState({});
  const getAllTeachers = async () => {
    const teachersCollectionRef = collection(firestore, "teachers");

    try {
      const querySnapshot = await getDocs(teachersCollectionRef);
      const teachersData = querySnapshot.docs.map((doc) => doc.data());
      setTeachers(teachersData);
    } catch (error) {
      console.error("Error getting teachers:", error);
    }
  };

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

  const firstLoad = async () => {
    await fetchData();
  };

  useEffect(() => {
    firstLoad();
    const localData = JSON.parse(localStorage.getItem("userProfile"));
    setUser(localData);
    getAllTeachers();
  }, []);

  return (
    <div className="overflow-hidden">
      <div>
        <Navbar user={user} />
      </div>
      <div className="bg-[url('src/assets/bg.svg')] w-screen bg-cover bg-no-repeat overflow-hidden">
        <h1 className="font-gaegu text-6xl text-center font-bold sola-shadow py-9 bg-white md:bg-inherit">
          Our Teachers
        </h1>
        {/* list of teachers */}
        <div className="md:grid flex flex-col md:grid-cols-3 gap-4 p-12">
          {teachers.map((teacher, idx) => (
            <TeacherCard teacher={teacher} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teacher;
