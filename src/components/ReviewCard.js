import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import ClickAwayListener from "react-click-away-listener";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "src/firebase";

const ReviewCard = ({ closeModal, value, setValue, history }) => {
  const [submit, setSubmit] = useState(false);
  const [review, setReview] = useState("");

  const submitReview = async () => {
    try {
      const data = {
        review: review,
        rating: value,
        teacherUid: history.teacherUid,
        studentUid: history.studentUid,
      };
      const reviewCollectionRef = collection(firestore, "review");

      const docRef = await addDoc(reviewCollectionRef, data);
      console.log("Review created and data stored in Firestore:", docRef.id);
      setSubmit(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="fixed z-20 h-screen w-screen bg-black top-0 left-0 opacity-25 flex"></div>
      <div className="fixed z-40 w-screen h-screen top-0 left-0 flex justify-center items-center">
        <ClickAwayListener onClickAway={closeModal}>
          <div className="bg-white p-12 rounded-xl font-gaegu ">
            {submit ? (
              <div className="flex flex-col items-center">
                <h1 className="text-3xl">
                  Your review has been posted. Thank you for your review!
                </h1>
                <button
                  className="bg-[#D2AFFF] px-4 py-2 rounded-full mt-6"
                  onClick={closeModal}
                >
                  Ok
                </button>
              </div>
            ) : (
              <>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-5xl">Leave a review</h1>
                  <p className="text-xl py-4">
                    Click the stars to rate {history.teacherName}
                  </p>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    size="large"
                  />
                </div>
                <div className="flex flex-col justify-start items-start py-2">
                  <h1 className="text-5xl text-left">Write a review</h1>
                  <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    rows={5}
                    className="w-full border-2 rounded-xl resize-none bg-[#D2AFFF] p-2 text-lg"
                  ></textarea>
                </div>

                <div className="flex flex-row justify-around gap-4">
                  <button
                    onClick={submitReview}
                    className="bg-[#D2AFFF] px-4 py-2 rounded-full mt-6"
                  >
                    Review
                  </button>
                  <button
                    className="bg-[#D9D9D9] px-4 py-2 rounded-full mt-6"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </ClickAwayListener>
      </div>
    </>
  );
};

export default ReviewCard;
