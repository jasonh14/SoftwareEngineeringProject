import React, { useState } from "react";
import sample from "src/assets/sample.jpg";
import Rating from "@mui/material/Rating";

const TeacherCard = () => {
  const [value, setValue] = useState(null);
  return (
    <div className="flex flex-row px-8 cursor-pointer py-12 rounded-xl shadow-lg bg-white gap-6 justify-center">
      <div className="">
        <div className="h-[150px] w-[150px] overflow-hidden rounded-full">
          <img src={sample} alt="sample" />
        </div>
      </div>
      <div className="font-gaegu">
        <h1 className="font-semibold text-2xl">Esther Vemberly</h1>
        <p>Classical, Christian, and Pop Music</p>
        <div className="flex flex-row gap-2">
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <p>(77)</p>
        </div>
        <p className="bg-[#D2AFFF] px-4 py-2 my-2 rounded-full">
          Price: Rp 100.000,00 / Session
        </p>
        <p>128 students</p>
      </div>
    </div>
  );
};

export default TeacherCard;
