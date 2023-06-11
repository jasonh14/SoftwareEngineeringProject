import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookConfirm = ({
  closeBookConfirm,
  date,
  time,
  learningMode,
  selectedPayment,
  bookConfirm,
  confirmBook,
}) => {
  const navigate = useNavigate();
  const formatDate = (date) => {
    var options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    var dateString = date.toLocaleDateString("en-US", options);

    return dateString;
  };

  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const amPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    return `${formattedHours}:${formattedMinutes} ${amPm}`;
  };

  console.log("date", date);
  console.log("time", time);
  console.log(learningMode);
  console.log(selectedPayment);

  return (
    <>
      <div className="fixed z-20 h-screen w-screen bg-black top-0 left-0 opacity-25 flex"></div>
      <div className="fixed z-40 w-screen h-screen top-0 left-0 flex justify-center items-center">
        <div className="bg-white p-12 rounded-xl font-gaegu w-[600px]">
          {bookConfirm ? (
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-center text-3xl">
                Confirmed!
                <br />
                Thank you for booking :)
              </p>
              <button
                onClick={() => navigate("/history")}
                className="rounded-full px-4 py-2 bg-[#D2AFFF]"
              >
                Ok
              </button>
            </div>
          ) : (
            <>
              <h1 className="text-center text-2xl pb-4">
                Do you want to confirm your booking ?
              </h1>
              <div className="flex flex-row justify-center">
                <div className="flex-1 flex justify-start flex-col">
                  <p>Date</p>
                  <p>Time</p>
                  <p>Learning Mode</p>
                  <p>Payment</p>
                </div>
                <div className="flex-1 flex justify-start flex-col">
                  <p>: {formatDate(date.$d)}</p>
                  <p>: {formatTime(time.$d)}</p>
                  <p>: {learningMode}</p>
                  <p>: {selectedPayment}</p>
                </div>
              </div>
              <div className="flex flex-row justify-around mt-4">
                <div
                  className="cursor-pointer rounded-full px-4 py-2 bg-[#D2AFFF]"
                  onClick={confirmBook}
                >
                  Yes
                </div>
                <div
                  onClick={closeBookConfirm}
                  className="cursor-pointer rounded-full px-4 py-2 bg-gray-400"
                >
                  No
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BookConfirm;
