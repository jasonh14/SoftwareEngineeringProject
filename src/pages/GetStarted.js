import React from "react";
import Button from "src/components/Button";
import logo from "src/assets/lososola2.png";

const GetStarted = () => {
  return (
    <div className="bg-[url('src/assets/bg.svg')] h-screen w-screen bg-cover bg-no-repeat overflow-hidden">
      <div className="w-full h-full flex justify-center items-center font-gaegu font-bold text-5xl flex-col gap-4">
        <img src={logo} alt="logo" className="h-[300px] mt-[-250px]" />
        <div className="text-center">
          The one and only private
          <br />
          music course app for you.
        </div>
        <Button text="Get Started" path="/login" />
      </div>
    </div>
  );
};

export default GetStarted;
