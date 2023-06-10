import React from "react";
import timothy from "src/assets/timothy.png";
import logo from "src/assets/smalllogo.png";
import { Link } from "react-router-dom";
import bg from "src/assets/teacher_profile_bottom.png";
import banner from "src/assets/teacher_profileBanner.png";

const TeacherProfile = () => {
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
            <div className="flex flex-row items-center gap-6 hover:bg-[#6619ff] rounded-full px-5">
                <p className="text-2xl font-semibold">Timothy Liundi</p>
                <div className="h-12 w-12 overflow-hidden rounded-full border-4 border-[#D2AFFF]">
                    <img src={timothy} alt="sample" />
                </div>
            </div>
            </div>
            {/* Profile */}
            <div className="relative">
                <div className="w-screen h-[150px] bg-slate-400"></div>
                    <div className="flex flex-row justify-start py-4 gap-12 items-start">
                        {/* photo */}
                        <div className="flex-1 flex gap-4 flex-col items-end justify-center relative">
                            <div className="flex flex-col gap-4 items-center">
                                <div className="mt-[-75px] bg-white w-[200px] flex justify-center overflow-hidden rounded-full border-4 border-[#D2AFFF]">
                                    <img src={timothy} alt="foto"/>
                                </div>
                                <div className="w-full bg-[#D2AFFF] p-2 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6619ff] transition duration-200">
                                    <p className="text-2xl font-gaegu">Logout</p>
                                </div>

                            </div>
                        </div>
                    {/* profile */}
                    <div className="flex-1 font-gaegu flex items-start flex-col justify-start">
                        <div className="flex justify-between w-full pr-12 mb-10">
                            <div className="text-white bg-black bg-opacity-40 rounded-full py-5 px-10">
                                <p className="text-3xl">Welcome,</p>
                                <h1 className="text-6xl font-semibold">Timothy Liundi</h1>
                            </div>
                            <div className="flex flex-col gap-4">
                                <span
                                // onClick={() => setShowEdit(true)}
                                className=" bg-[#D2AFFF]  py-2 px-4 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6619ff] transition duration-200"
                                >
                                    <p className="text-2xl font-gaegu">Edit Photo</p>
                                </span>
                                <span
                                // onClick={() => setShowEditDesc(true)}
                                className=" bg-[#D2AFFF] py-2 px-4 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6619ff] transition duration-200"
                                >
                                    <p className="text-2xl font-gaegu">Edit Description</p>
                                </span>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold">Profile</h1>
                            <p className="text-xl">Hihihihiihihi</p>
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold">Gender</h1>
                            <p className="text-xl">Male</p>
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold">Date of Birth</h1>
                            <p className="text-xl">29 June 20023</p>
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold">Email</h1>
                            <p className="text-xl">thristan.team@gmail.com</p>
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold">City of Residence</h1>
                            <p className="text-xl">Tangerang</p>
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold">Address</h1>
                            <p className="text-xl">Silkwood</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherProfile;
