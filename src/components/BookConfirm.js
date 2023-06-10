import React, { useState } from "react";

const BookConfirm = ({ closeBookConfirm }) => {
  const [bookConfirm, setBookConfirm] = useState(false);

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
                onClick={closeBookConfirm}
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
                  <p>: 4 Jan 2024</p>
                  <p>: 10.00</p>
                  <p>: Online</p>
                  <p>: Blu by BCA</p>
                </div>
              </div>
              <div className="flex flex-row justify-around mt-4">
                <button
                  className="rounded-full px-4 py-2 bg-[#D2AFFF]"
                  onClick={() => setBookConfirm(true)}
                >
                  Yes
                </button>
                <button className="rounded-full px-4 py-2 bg-gray-400">
                  No
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BookConfirm;
