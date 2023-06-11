import React, { useState } from "react";
import sample from "src/assets/sample.jpg";
import Rating from "@mui/material/Rating";
import ReviewCard from "./ReviewCard";
import defPhoto from "src/assets/user.png";
import { Link } from "react-router-dom";

const HistoryCard = ({ online, history }) => {
  console.log(history.date);
  const [value, setValue] = useState(history.rating);
  const [showReview, setShowReview] = useState(false);
  const formatDate = (seconds) => {
    const milliseconds = seconds * 1000; // Convert seconds to milliseconds
    const date = new Date(milliseconds);

    // Extract day, month, and year components
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
    const year = date.getFullYear().toString();

    return `${day}/${month}/${year}`;
  };

  const openModal = () => {
    setShowReview(true);
  };

  const closeModal = () => {
    setShowReview(false);
  };
  return (
    <>
      {showReview && (
        <ReviewCard
          history={history}
          closeModal={closeModal}
          value={value}
          setValue={setValue}
        />
      )}

      <div className="flex flex-row px-8 py-12 rounded-xl shadow-lg bg-white gap-6 justify-center items-center">
        <div className="">
          <div className="h-[150px] w-[150px] overflow-hidden rounded-full">
            <img src={history?.teacherPhoto || defPhoto} alt="sample" />
          </div>
        </div>
        <div className="font-gaegu">
          <h1 className="font-semibold text-3xl">{history.teacherName}</h1>
          <p className="text-xl">{formatDate(history.date)}</p>
          <div className="flex flex-row gap-2" onClick={openModal}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              size="large"
            />
          </div>
          {online && (
            <Link
              to={
                "https://binus.zoom.us/j/93296129287?pwd=OHlJVzBCeThTWnkzNW5zK3N6V0lyZz09"
              }
              target="_blank"
            >
              <button className="bg-[#D2AFFF] p-4 rounded-full my-2">
                Start Session
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default HistoryCard;
