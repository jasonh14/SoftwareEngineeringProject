import React, { useState, useEffect } from "react";
import Navbar from "src/components/Navbar";
import sample from "src/assets/sample.jpg";
import Rating from "@mui/material/Rating";
import TeacherCard from "src/components/TeacherCard";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "src/firebase";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);

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

  useEffect(() => {
    getAllTeachers();
  }, []);

  return (
    <div className="overflow-hidden">
      <div>
        <Navbar />
      </div>
      <div className="bg-[url('src/assets/bg.svg')] w-screen bg-cover bg-no-repeat overflow-hidden">
        <h1 className="font-gaegu text-6xl text-center font-bold sola-shadow py-9">
          Our Teachers
        </h1>
        {/* list of teachers */}
        <div className="grid grid-cols-3 gap-4 p-12">
          {teachers.map((teacher) => (
            <TeacherCard teacher={teacher} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teacher;
