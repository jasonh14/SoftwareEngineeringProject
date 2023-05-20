import React from "react";
import GetStarted from "src/pages/GetStarted";
import { useState } from "react";
import LoginForm from "src/components/LoginForm";
import { useLocation } from "react-router-dom";
import Main from "src/components/Main";

const Register = () => {
  let { state } = useLocation();

  return (
    <>
      {state?.home === true ? (
        <div>
          <Main />
        </div>
      ) : (
        <GetStarted />
      )}
    </>
  );
};

export default Register;
