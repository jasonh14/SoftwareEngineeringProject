import React from "react";
import Button from "src/components/Button";
import logo from "src/assets/lososola2.png";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/role");
  };
  return (
    <div className="bg-[url('src/assets/bg.svg')] h-screen w-screen bg-cover bg-no-repeat overflow-hidden">
      <div className="w-full h-full flex justify-center items-center font-gaegu font-bold text-5xl flex-col gap-4">
        <img src={logo} alt="logo" className="h-[300px] mt-[-250px]" />
        <div className="text-center">
          The one and only private
          <br />
          music course app for you.
        </div>
        <Button
          text="Get Started"
          onClick={handleClick}
          className={
            "bg-[#8C52FF] px-4 py-2 rounded-full cursor-pointer hover:bg-[#6619ff] transition duration-200"
          }
        />
      </div>
    </div>
  );
};

export default GetStarted;
