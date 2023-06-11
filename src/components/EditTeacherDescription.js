import React, { useRef, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import photoDef from "src/assets/user.png";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  doc,
  updateDoc,
  query,
  getDocs,
  getDoc,
  where,
  collection,
} from "firebase/firestore";
import { storage, firestore } from "src/firebase";
import { useNavigate } from "react-router-dom";

const EditTeacherDescription = ({ user, setShowEditDesc }) => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState(user.desc);
  const [price, setPrice] = useState(user.price);
  // console.log(selectedImage);
  const navigate = useNavigate();
  console.log(description);

  const handleUpload = async () => {
    const uid = user.uid;

    try {
      // Update the "photo" field in the user document
      const collectionRef = collection(firestore, "teachers");
      const q = query(collectionRef, where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const docRef = doc.ref;
        updateDoc(docRef, {
          desc: description,
          price: price,
        });
      });

      setShowEditDesc(false);

      console.log("description changed and user document updated:");
      alert("success");
      // window.location.reload();
      navigate("/teacher/home");
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  return (
    <>
      <div className="fixed z-20 h-screen w-screen bg-black top-0 left-0 opacity-25 flex"></div>
      <div className="fixed z-40 w-screen h-screen top-0 left-0 flex justify-center items-center">
        <ClickAwayListener onClickAway={() => setShowEditDesc(false)}>
          <div className="bg-white p-12 rounded-xl font-gaegu">
            <div className="">
              <h1 className="text-xl">Edit your description</h1>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                className="p-2 resize-none w-full border-[1px] border-black rounded-lg"
              ></textarea>
            </div>

            <div className="pt-2 pb-4">
              <h1 className="text-xl">Edit your Price</h1>
              <input
                type="text"
                className=" px-2 border-[1px] rounded-lg border-black"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div
              onClick={handleUpload}
              className="cursor-pointer bg-[#E4CFFF] p-2 rounded-xl text-center"
            >
              Change
            </div>
          </div>
        </ClickAwayListener>
      </div>
    </>
  );
};

export default EditTeacherDescription;
