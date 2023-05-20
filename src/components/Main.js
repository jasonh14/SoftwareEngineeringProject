import React from "react";
import { Link } from "react-router-dom";
import mainIcon from "src/assets/mainIcon.svg";
import sample from "src/assets/sample.jpg";

const Main = () => {
  return (
    <div className="py-6 flex flex-col justify-center items-center">
      <div className="flex flex-row items-center gap-4 py-2">
        <div className="h-12 w-12 overflow-hidden rounded-full border-4 border-[#D2AFFF]">
          <img src={sample} alt="" />
        </div>
        <div className="font-gaegu font-bold text-4xl">Jason Hartanto</div>
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
