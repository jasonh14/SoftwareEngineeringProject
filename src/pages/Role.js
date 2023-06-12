import React from "react";
import logo from "src/assets/lososola2.png";
import student from "src/assets/Student.png";
import teacher from "src/assets/Teacher.png";
import { Link } from "react-router-dom";

const Role = () => {
  return (
    <div className="md:bg-[url('src/assets/bg.svg')] bg-center h-screen w-screen bg-cover bg-no-repeat overflow-hidden p-4">
      <div className="w-full h-full flex justify-center items-center font-gaegu font-bold  flex-col gap-4 text-4xl">
        <div>
          <img src={logo} alt="logo" className="w-full md:h-[300px] " />
        </div>
        <h1 className="font-black text-4xl">Select your role:</h1>
        <div className="flex flex-row justify-center items-center gap-4">
          <Link to={"/login"}>
            <div className="cursor-pointer hover:scale-105 transition duration-150 ease-in-out">
              <img className="w-full" src={student} alt="student" />
            </div>
          </Link>

          <Link to={"/teacher/login"}>
            <div className="cursor-pointer hover:scale-105 transition duration-150 ease-in-out">
              <img className="w-full" src={teacher} alt="teacher" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Role;
