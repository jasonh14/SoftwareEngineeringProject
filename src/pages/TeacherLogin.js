import React from "react";
import LoginForm from "src/components/LoginForm";

const TeacherLogin = () => {
  return (
    <div>
      <LoginForm teacher={true} />
    </div>
  );
};

export default TeacherLogin;
