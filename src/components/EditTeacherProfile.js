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
  teacher,
} from "firebase/firestore";
import { storage, firestore } from "src/firebase";
import { useNavigate } from "react-router-dom";

const EditTeacherProfile = ({ user, setShowEdit }) => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState("");
  // console.log(selectedImage);
  const navigate = useNavigate();
  console.log(description);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleUpload = async () => {
    const uid = user.uid;
    const file = selectedImage;

    try {
      // Create a storage reference with a unique filename
      const storageRef = ref(storage, `photos/${file.name}`);
      console.log("test");
      // Upload the file to Firebase Storage
      await uploadBytes(storageRef, file);

      // Get the download URL for the uploaded photo
      const downloadURL = await getDownloadURL(storageRef);

      // Update the "photo" field in the user document
      // const typeUser = teacher ? "teachers" : "users";
      const collectionRef = collection(firestore, "teachers");
      const q = query(collectionRef, where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const docRef = doc.ref;
        updateDoc(docRef, {
          photo: downloadURL,
        });
      });

      // console.log("uid", uid);
      // console.log("downloadUrl", downloadURL);

      // await updateDoc(userRef, { photo: downloadURL });
      setShowEdit(false);
      window.location.reload();

      console.log("Photo uploaded and user document updated:", downloadURL);
      // alert("success");
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Perform upload logic with the selected file
    console.log("Uploading image:", file);
    setSelectedImage(file);
  };

  const deletePicture = async () => {
    const uid = user.uid;

    try {
      // Update the "photo" field in the user document
      const collectionRef = collection(firestore, "users");
      const q = query(collectionRef, where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const docRef = doc.ref;
        updateDoc(docRef, {
          photo: "",
        });
      });

      // console.log("uid", uid);
      // console.log("downloadUrl", downloadURL);

      // await updateDoc(userRef, { photo: downloadURL });
      setShowEdit(false);
      window.location.reload();

      console.log("Photo deleted and user document updated:");
      // alert("success");
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  return (
    <>
      <div className="fixed z-20 h-screen w-screen bg-black top-0 left-0 opacity-25 flex"></div>
      <div className="fixed z-40 w-screen h-screen top-0 left-0 flex justify-center items-center">
        <ClickAwayListener onClickAway={() => setShowEdit(false)}>
          <div className="bg-white p-12 rounded-xl font-gaegu">
            <div className="flex flex-row gap-4 items-center">
              <div className="bg-white h-[150px] w-[150px] flex justify-center overflow-hidden rounded-full border-4 border-[#D2AFFF]">
                <img
                  src={user.photo === "" ? photoDef : user.photo}
                  alt="foto"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div
                  onClick={handleButtonClick}
                  className="bg-[#E4CFFF] cursor-pointer p-2 rounded-xl"
                >
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                  Choose Picture
                </div>
                <div
                  onClick={deletePicture}
                  className="border-2 cursor-pointer p-2 rounded-xl border-[#E4CFFF]"
                >
                  Delete Picture
                </div>
              </div>
            </div>

            <div
              onClick={handleUpload}
              className="mt-4 cursor-pointer bg-[#E4CFFF] p-2 rounded-xl text-center"
            >
              Upload
            </div>
          </div>
        </ClickAwayListener>
      </div>
    </>
  );
};

export default EditTeacherProfile;
