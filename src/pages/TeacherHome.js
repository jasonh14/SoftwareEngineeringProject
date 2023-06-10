import React from "react";
import { Link } from "react-router-dom";
import mainIcon from "src/assets/mainIcon.svg";
import timothy from "src/assets/timothy.png";
import side from "src/assets/side_note.png";

const TeacherHome = () => {
  return (
    <div className="py-6 flex flex-col justify-center items-center">
        <Link to="/teacher/profile">
            <div className="flex flex-row items-center gap-4 my-10 mx-16 px-5 py-4 absolute top-0 right-0 hover:bg-[#6619ff] rounded-full transition duration-200">
                <div className="h-12 w-12 overflow-hidden rounded-full border-4 border-[#D2AFFF]">
                <img src={timothy} alt="foto" />
                </div>
                <div className="font-gaegu font-bold text-4xl">
                    Timothy Liundi
                </div>
            </div>
        </Link>

      <img src={mainIcon} alt="main icon" className="mt-[150px]"/>

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
