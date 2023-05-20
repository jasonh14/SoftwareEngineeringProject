import React from "react";
import Button from "./Button";
import logo from "src/assets/lososola2.png";

const LoginForm = () => {
  return (
    <div className="bg-[url('src/assets/bg.svg')] h-screen w-screen bg-cover bg-no-repeat overflow-hidden">
      <div className="w-full h-full flex justify-center items-center font-gaegu font-bold  flex-col gap-4 text-4xl">
        <img src={logo} alt="logo" className="h-[300px] mt-[-250px]" />
        <form className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <label>Email: </label>
            <input className="rounded-full p-2" type="email" />
          </div>

          <div className="flex justify-between items-center">
            <label>Password: </label>
            <input type="password" className="rounded-full" />
          </div>
        </form>
        <Button text="Login" path="/" home={true} />
        <p>Dont have an account ? Sign up here!</p>
      </div>
    </div>
  );
};

export default LoginForm;
