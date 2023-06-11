import React from "react";
import Button from "./Button";
import logo from "src/assets/lososola2.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = ({
  teacher,
  handleClick,
  pass,
  setPass,
  email,
  setEmail,
  wrongPass,
}) => {
  const navigate = useNavigate();

  return (
    <div className="md:bg-[url('src/assets/bg.svg')] h-screen w-screen bg-cover bg-no-repeat overflow-hidden p-4">
      <div className="w-full h-full flex justify-center items-center font-gaegu font-bold  flex-col gap-4 text-4xl">
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-full md:h-[300px] mt-[-250px]"
          />
        </div>
        <form className="flex flex-col gap-4 ">
          <div className="flex md:flex-row flex-col  justify-start md:justify-between md:items-center items-start text-3xl">
            <label>Email: </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full p-2"
              type="email"
            />
          </div>

          <div className="flex md:flex-row flex-col  md:justify-between md:items-center justify-start items-start text-3xl">
            <label>Password: </label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              className="rounded-full"
            />
          </div>
          {wrongPass && (
            <p className="font-poppins font-normal text-[16px] text-red-400">
              Wrong password!
            </p>
          )}
        </form>
        <Button
          text="Login"
          onClick={handleClick}
          home={true}
          className={
            "bg-[#8C52FF] px-4 py-2 rounded-full cursor-pointer hover:bg-[#6619ff] transition duration-200"
          }
        />
        <p className="text-[22px]">
          Dont have an account ?{" "}
          <Link to={teacher ? "/teacher/signup" : "/signup"}>
            Sign up here!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
