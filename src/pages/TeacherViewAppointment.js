import React from "react";
import timothy from "src/assets/timothy.png";
import logo from "src/assets/smalllogo.png";
import { Link } from "react-router-dom";
import bg from "src/assets/bg_no_sola.png";

const TeacherViewAppointment = () => {
  return (
      <div>
        {/* Background */}
        <img src={bg} alt="bg" className="absolute top-0"/>
        {/* Navbar */}
        <div className="flex flex-row sticky bg-white justify-between font-gaegu h-[100px] shadow-lg p-6">
            {/* left */}
            <div className="flex flex-row gap-6">
                <Link to="/teacher/home">
                <div className="h-full">
                    <img className="cursor-pointer h-full" src={logo} alt="" />
                </div>
                </Link>
                <Link to={"/teacher/view-appointment"}>
                <div className="bg-[#D2AFFF] px-4 py-2 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6619ff] transition duration-200">
                    <p className="text-2xl">View Appointment</p>
                </div>
                </Link>
            </div>
            {/* right */}
            <div className="flex flex-row items-center gap-6">
                <p className="text-2xl font-semibold">Timothy Liundi</p>
                <div className="h-12 w-12 overflow-hidden rounded-full border-4 border-[#D2AFFF]">
                    <img src={timothy} alt="sample" />
                </div>
            </div>
        </div>
        {/* Table */}
        <table className=" mx-auto min-w-0 divide-y bg-[#D2AFFF] bg-opacity-50 font-gaegu my-28">
            <thead>
                <tr>
                    <th className="text-4xl px-12 py-6 bg-[#D2AFFF] text-center font-extrabold uppercase">Student Name</th>
                    <th className="text-4xl px-12 py-6 bg-[#D2AFFF] text-center font-extrabold uppercase">Date</th>
                    <th className="text-4xl px-12 py-6 bg-[#D2AFFF] text-center font-extrabold uppercase">Time</th>
                    <th className="text-4xl px-12 py-6 bg-[#D2AFFF] text-center font-extrabold uppercase">Learning Mode</th>
                    <th className="text-4xl px-12 py-6 bg-[#D2AFFF] text-center font-extrabold uppercase">Session</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-3xl px-12 py-8 text-gray-500">Jason Hartanto</td>
                    <td className="text-3xl px-12 py-8 text-gray-500">13 January 2023</td>
                    <td className="text-3xl px-12 py-8 text-gray-500">10.00</td>
                    <td className="text-3xl px-12 py-8 text-gray-500">Offline</td>
                    <td className="text-3xl px-12 py-8 text-gray-500">Session 1</td>
                </tr>
                <tr>
                    <td className="text-3xl px-12 py-8 text-gray-500">Timothy Liundi</td>
                    <td className="text-3xl px-12 py-8 text-gray-500">26 June 2023</td>
                    <td className="text-3xl px-12 py-8 text-gray-500">19.00</td>
                    <td className="text-3xl px-12 py-8 text-gray-500">Online</td>
                    <td className="text-3xl px-12 py-8 text-gray-500">Session 4</td>
                </tr>
            </tbody>
        </table>
    </div> 
  );
};

export default TeacherViewAppointment;
