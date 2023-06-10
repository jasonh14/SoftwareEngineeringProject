import React from "react";
import timothy from "src/assets/timothy.png";
import logo from "src/assets/smalllogo.png";
import { Link } from "react-router-dom";
import bg from "src/assets/teacher_profile_bottom.png";
import banner from "src/assets/teacher_profileBanner.png";

const TeacherViewAppointment = () => {
  return (
      <div>
        {/* Background */}
        <div className="relative">
            <img src={bg} alt="bg" className="absolute bottom-0"/>
            <img src={banner} alt="bg" className="absolute top-0 w-auto"/>
        </div>
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
        {/* Profile */}
        <div className="flex flex-row w-7/12">
            {/* Left */}
            <div className="">
                <img src={timothy} alt="bg" className="relative rounded-full"/>
                <Link to={"/"}>
                    <div className="bg-[#D2AFFF] m-10 px-4 py-2 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6619ff] transition duration-200">
                        <p className="text-2xl">Log Out</p>
                    </div>
                </Link>
            </div>
            {/* Right */}
            <div className="from-neutral-950">
                <p>
                    Welcome,
                </p>
                <p>
                    Timothy Liundi
                </p>
                <h1>
                    Profile
                </h1>
                <p>
                    No Profile Details..
                </p>
                <h1>
                    Profile
                </h1>
                <div className="my-5 mx-2 border-blacka">
                    <p className="uppercase font-montserrat font-light">Timothy's Curriculum VItae (CV)</p>
                </div>
                <h1>
                    Line ID
                </h1>
                <p>
                    timothyliundi
                </p>
                <h1>
                    Whatsapp
                </h1>
                <p>
                    0812345679
                </p>
            </div>
        </div>
    </div> 
  );
};

export default TeacherViewAppointment;
