import React, { useEffect, useState } from "react";
import logo from "src/assets/smalllogo.png";
import sample from "src/assets/sample.jpg";
import { Link } from "react-router-dom";
import defPhoto from "src/assets/user.png";

const Navbar = () => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("userProfile"));
    console.log("localData", localData?.name);
    setName(localData?.name);
    setPicture(localData?.photo);
  }, [name, picture]);

  return (
    <div className="flex flex-row sticky justify-between font-gaegu h-[100px] shadow-lg p-6">
      {/* left */}
      <div className="flex flex-row gap-6">
        <Link to="/" state={{ home: true }}>
          <div className="h-full">
            <img className="cursor-pointer h-full" src={logo} alt="" />
          </div>
        </Link>
        <Link to="/teachers">
          <div className="bg-[#D2AFFF] px-4 py-2 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6619ff] transition duration-200">
            <p className="text-2xl">Teachers</p>
          </div>
        </Link>
        <Link to={"/history"}>
          <div className="bg-[#D2AFFF] px-4 py-2 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6619ff] transition duration-200">
            <p className="text-2xl">Appointment History</p>
          </div>
        </Link>
      </div>
      {/* right */}
      <div className="flex flex-row items-center gap-6">
        <p className="text-2xl font-semibold">{name ? name : "loading"}</p>
        <div className="h-12 w-12 overflow-hidden rounded-full border-4 border-[#D2AFFF]">
          <img src={picture === "" ? defPhoto : picture} alt="sample" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
