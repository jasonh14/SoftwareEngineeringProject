import React, { useRef, useState } from "react";
import logo from "src/assets/lososola2.png";
import bg_top from "src/assets/bg_top_no_sola.png";
import bg_bot from "src/assets/bg_bottom_no_sola.png";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, firestore } from "src/firebase";

const TeacherSignup = () => {
  const navigate = useNavigate();
  // const { state } = useLocation();
  // console.log("agree", state);
  const fileInputRef = useRef(null);
  const [selectedFile, setselectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [tnc, setTnc] = useState(false);
  const [showErr, setShowErr] = useState(false);

  const handleClick = () => {};

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleUpload = async () => {
    if (!tnc) {
      setShowErr(true);
      return;
    }
    const file = selectedFile;
    try {
      // Create a storage reference with a unique filename
      const storageRef = ref(storage, `photos/${file.name}`);
      // console.log("test");
      // Upload the file to Firebase Storage
      await uploadBytes(storageRef, file);

      // Get the download URL for the uploaded photo
      const downloadURL = await getDownloadURL(storageRef);

      console.log("Photo uploaded and user document updated:", downloadURL);
      // alert("success");
      navigate("/teacher/login");
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Perform upload logic with the selected file
    console.log("Uploading image:", file);
    setselectedFile(file);
    setUploaded(true);
  };

  return (
    <div className="bg-[#E4CFFF]">
      <img src={bg_top} alt="bg_top" />

      {/* Qualification */}
      <div className="flex justify-center items-center font-gaegu font-bold flex-col py-9 gap-3">
        <img
          src={logo}
          alt="logo"
          className=" w-[300px] md:w-auto md:h-[400px] mt-[-100px] md:mt-[-350px] relative"
        />

        {/* Qualification Title */}
        <div>
          <h1 className="font-gaegu text-3xl md:text-7xl mt-[-75px] text-center font-bold sola-shadow py-9">
            Teacher's Qualification:
          </h1>
        </div>

        {/* Terms */}
        <ul className="list-disc font-montserrat font-normal text-xl px-12 md:text-2xl mt-[-25px]">
          <li>Must be minimum bachelor degree in Music</li>
          <li>Have a minimum one year of teaching experience</li>
          <li>Having certifications and achievement in Music is a plus</li>
        </ul>

        {/* Submission */}
        <div className="flex flex-col gap-7 py-12 relative">
          {/* Submit Title */}
          <h1 className="font-gaegu text-3xl md:text-7xl mt-[-15px] text-center font-bold sola-shadow">
            Submit your CV here to apply:
          </h1>

          {/* Drag File */}
          <div
            onClick={handleButtonClick}
            className="cursor-pointer bg-white md:w-4/12 mx-auto"
          >
            <div className="px-10 py-20 border-4 border-dashed border-black">
              <div className="border-2 border-black rounded-lg">
                <p className="font-montserrat font-semibold text-base p-2 text-center">
                  {uploaded ? "CHANGE" : "SELECT"} FILE
                </p>
              </div>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex justify-center text-2xl">
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2">
                  <input
                    type="checkbox"
                    name="tnc"
                    checked={tnc}
                    onChange={() => {
                      setTnc((prev) => !prev);
                    }}
                  />
                  <p>
                    I agree to the{" "}
                    <a
                      href="/teacher/terms"
                      target="_blank"
                      className="hover:text-[#6619ff] transition duration-200"
                    >
                      <u>terms and condition</u>
                    </a>
                  </p>
                </div>
                {showErr && (
                  <p className="text-red-400">
                    You must agree with the terms and condition
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <div className="justify-center flex">
            <button
              onClick={handleUpload}
              className="bg-[#D2AFFF] text-4xl px-24 py-2 rounded-full cursor-pointer hover:bg-[#6619ff] transition duration-200"
            >
              Apply
            </button>
          </div>
        </div>

        <div className="py-15">
          <p className="font-montserrat font-normal text-2xl text-center">
            After you have been verified, <br />
            you will receive an email confirmation <br />
            consisting your teacher's emial and password
          </p>
        </div>
      </div>
      <img src={bg_bot} alt="bg_bot" className="" />

      <input
        type="file"
        accept="pdf/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default TeacherSignup;
