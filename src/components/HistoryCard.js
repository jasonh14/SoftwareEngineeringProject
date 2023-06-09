import React, { useState } from "react";
import sample from "src/assets/sample.jpg";
import Rating from "@mui/material/Rating";
import ReviewCard from "./ReviewCard";

const HistoryCard = () => {
  const [value, setValue] = useState(null);
  const [showReview, setShowReview] = useState(false);

  const openModal = () => {
    setShowReview(true);
  };

  const closeModal = () => {
    setShowReview(false);
  };
  return (
    <>
      {showReview && <ReviewCard closeModal={closeModal} />}

      <div
        onClick={openModal}
        className="flex flex-row px-8 cursor-pointer py-12 rounded-xl shadow-lg bg-white gap-6 justify-center items-center"
      >
        <div className="">
          <div className="h-[150px] w-[150px] overflow-hidden rounded-full">
            <img src={sample} alt="sample" />
          </div>
        </div>
        <div className="font-gaegu">
          <h1 className="font-semibold text-3xl">Esther Vemberly</h1>
          <p className="text-xl">Monday, 22 May 2023</p>
          <div className="flex flex-row gap-2">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              size="large"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryCard;
