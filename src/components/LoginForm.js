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
    <div className="bg-[url('src/assets/bg.svg')] h-screen w-screen bg-cover bg-no-repeat overflow-hidden">
      <div className="w-full h-full flex justify-center items-center font-gaegu font-bold  flex-col gap-4 text-4xl">
        <img src={logo} alt="logo" className="h-[300px] mt-[-250px]" />
        <form className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <label>Email: </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full p-2"
              type="email"
            />
          </div>

          <div className="flex justify-between items-center">
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
        <p>
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
