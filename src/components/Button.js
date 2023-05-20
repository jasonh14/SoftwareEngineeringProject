import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, path, home }) => {
  return (
    <Link to={path} state={{ home: home }}>
      <div className="bg-[#8C52FF] px-4 py-2 rounded-full cursor-pointer hover:bg-[#6619ff] transition duration-200">
        <p className="text-2xl">{text}</p>
      </div>
    </Link>
  );
};

export default Button;
