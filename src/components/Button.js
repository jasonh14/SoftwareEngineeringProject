import React from "react";

const Button = ({ text, className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <p className="text-2xl">{text}</p>
    </div>
  );
};

export default Button;
