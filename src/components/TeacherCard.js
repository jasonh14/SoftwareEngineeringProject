import React, { useState } from "react";
import sample from "src/assets/sample.jpg";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import defPhoto from "src/assets/user.png";

const TeacherCard = ({ teacher }) => {
  const [value, setValue] = useState(teacher.rating);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/teachers/${teacher.uid}`);
  };

  const formatNumber = (number) => {
    const formattedNumber = number.toLocaleString("en-US").replace(",", ".");

    return formattedNumber;
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-row px-8 cursor-pointer py-12 rounded-xl shadow-lg bg-white gap-6 justify-center"
    >
      <div className="">
        <div className="h-[150px] w-[150px] overflow-hidden rounded-full">
          <img src={teacher?.photo || defPhoto} alt="sample" />
        </div>
      </div>
      <div className="font-gaegu">
        <h1 className="font-semibold text-2xl">{teacher.name}</h1>
        <p>{teacher.desc}</p>
        <div className="flex flex-row gap-2">
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <p>({teacher.ratingAmount})</p>
        </div>
        <p className="bg-[#D2AFFF] px-4 py-2 my-2 rounded-full">
          Rp {formatNumber(teacher.price)} / Session
        </p>
        <p>{teacher.students} students</p>
      </div>
    </div>
  );
};

export default TeacherCard;
