import React, { useState } from "react";
import LoginForm from "src/components/LoginForm";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [wrongPass, setWrongPass] = useState(false);

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // User sign-in successful
      const user = userCredential.user;
      console.log("User signed in:", user);
      setWrongPass(false);
      localStorage.setItem("userData", JSON.stringify(user));

      // Continue with other logic or operations after sign-in
      // ...
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        console.error("Wrong password entered");
        setWrongPass(true);
      } else {
        console.error("Error signing in:", error);
        // Handle other error cases or display a generic error message
        // ...
        alert(error);
      }
    }
  };
  const handleClick = () => {
    signIn(email, pass);
    navigate("/", { state: { home: true } });
  };

  return (
    <div>
      <LoginForm
        handleClick={handleClick}
        email={email}
        setEmail={setEmail}
        pass={pass}
        setPass={setPass}
        wrongPass={wrongPass}
      />
    </div>
  );
};

export default Login;
