import React, { useState } from "react";
import logo from "src/assets/lososola2.png";
import Button from "src/components/Button";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "src/firebase";
import { collection, addDoc } from "firebase/firestore";

const SignUp = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [checkedTnc, setCheckedTnc] = useState(false);

  const navigate = useNavigate();

  const [fillName, setFillName] = useState(true);
  const [fillGender, setFillGender] = useState(true);
  const [fillCity, setFillCity] = useState(true);
  const [fillDate, setFillDate] = useState(true);
  const [fillEmail, setFillEmail] = useState(true);
  const [fillPassword, setFillPassword] = useState(true);
  const [fillConfirmPass, setFillConfirmPass] = useState(true);
  const [fillTnc, setFillTnc] = useState(true);
  const [fillAddress, setFillAddress] = useState(true);
  const [passMatch, setPassMatch] = useState(true);
  const [canSubmit, setCanSubmit] = useState(false);

  const signUp = async (email, password, userData) => {
    try {
      // Step 1: Create a new user account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Step 2: User creation successful
      const user = userCredential.user;

      // Step 3: Create a reference to the Firestore collection "users"
      const usersCollectionRef = collection(firestore, "users");

      // Step 4: Combine additional user data with the user ID
      const userDataWithId = {
        ...userData,
        uid: user.uid,
        email: email,
        description: "-",
        photo: "",
      };

      // Step 5: Store the user data in Firestore by adding a new document
      const docRef = await addDoc(usersCollectionRef, userDataWithId);

      console.log("User created and data stored in Firestore:", docRef.id);
      // Step 6: Retrieve the current user data
      // const currentUserData = { ...userDataWithId, id: docRef.id };
      // // Step 7: Store user data in localStorage
      // localStorage.setItem("userData", JSON.stringify(currentUserData));
      // console.log("Current User Data:", currentUserData);
    } catch (error) {
      console.error("Error creating user:", error);
      console.error("Error storing user data in Firestore:", error);
    }
  };

  const handleSelectChangeCity = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleRadioChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleConfirmPass = (e) => {
    const value = e.target.value;
    setConfirmPass(value);

    if (value !== password) {
      setPassMatch(false);
    } else {
      setPassMatch(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Reset all fill states
    setFillName(true);
    setFillGender(true);
    setFillCity(true);
    setFillDate(true);
    setFillEmail(true);
    setFillPassword(true);
    setFillConfirmPass(true);
    setFillTnc(true);
    setFillAddress(true);

    let isFormValid = true;

    if (name.trim() === "") {
      setFillName(false);
      isFormValid = false;
    }

    if (selectedGender === "") {
      setFillGender(false);
      isFormValid = false;
    }

    if (selectedCity === "") {
      setFillCity(false);
      isFormValid = false;
    }

    if (startDate === null) {
      setFillDate(false);
      isFormValid = false;
    }

    if (email.trim() === "") {
      setFillEmail(false);
      isFormValid = false;
    }

    if (address.trim() === "") {
      setFillAddress(false);
      isFormValid = false;
    }

    if (password.trim() === "") {
      setFillPassword(false);
      isFormValid = false;
    }

    if (confirmPass.trim() === "") {
      setFillConfirmPass(false);
      isFormValid = false;
    }

    if (confirmPass !== password) {
      setPassMatch(false);
      isFormValid = false;
    }

    if (!checkedTnc) {
      setFillTnc(false);
      isFormValid = false;
    }

    if (isFormValid) {
      // Perform further actions for a valid form submission
      console.log(selectedCity);
      console.log(selectedGender);
      console.log(startDate);
      console.log(name);
      console.log(email);
      console.log(address);
      console.log(password);
      console.log(confirmPass);
      console.log(checkedTnc);

      const userData = {
        name: name,
        address: address,
        checkedTnc: checkedTnc,
        city: selectedCity,
        gender: selectedGender,
        date: startDate,
      };
      await signUp(email, password, userData);

      navigate("/");
    }
  };

  return (
    <div className="bg-[#E4CFFF]">
      <div className="bg-[url('src/assets/bg.svg')] h-screen w-screen bg-cover bg-no-repeat overflow-hidden ">
        <div className="w-full h-full flex justify-center items-center font-gaegu font-bold  flex-col gap-4 text-4xl">
          <img src={logo} alt="logo" className="h-[300px] " />
          <form className="bg-white flex flex-col gap-4 rounded-xl p-12 shadow-lg h-[500px] overflow-y-auto text-3xl mb-7">
            <div className="flex flex-col  items-start">
              <label>Full Name:</label>
              <input
                className="p-2"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {fillName ? (
                ""
              ) : (
                <p className="font-poppins font-normal text-sm text-red-500">
                  Please fill in your name
                </p>
              )}
            </div>

            <div className="flex flex-col  items-start">
              <label>Gender</label>

              <div className="flex  gap-2">
                <label className="flex gap-2">
                  <input
                    type="radio"
                    value="Male"
                    checked={selectedGender === "Male"}
                    onChange={handleRadioChange}
                  />
                  Male
                </label>

                <label className="flex gap-2">
                  <input
                    type="radio"
                    value="Female"
                    checked={selectedGender === "Female"}
                    onChange={handleRadioChange}
                  />
                  Female
                </label>
              </div>
              {fillGender ? (
                ""
              ) : (
                <p className="font-poppins font-normal text-sm text-red-500">
                  Please select a gender
                </p>
              )}
            </div>

            <div className="flex flex-col  items-start">
              <label>Date of Birth</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
              />
              {fillDate ? (
                ""
              ) : (
                <p className="font-poppins font-normal text-sm text-red-500">
                  Please enter your date of birth
                </p>
              )}
            </div>

            <div className="flex flex-col  items-start">
              <label>Email:</label>
              <input
                className="p-2"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {fillEmail ? (
                ""
              ) : (
                <p className="font-poppins font-normal text-sm text-red-500">
                  Please fill in your email
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label>City of Residence</label>
              <select
                className="p-4"
                value={selectedCity}
                onChange={handleSelectChangeCity}
              >
                <option value="" disabled hidden>
                  Select an option
                </option>
                <option value="West Jakarta">West Jakarta</option>
                <option value="East Jakarta">East Jakarta</option>
                <option value="Tanggerang">Tanggerang</option>
              </select>
              {fillCity ? (
                ""
              ) : (
                <p className="font-poppins font-normal text-sm text-red-500">
                  Please enter a city
                </p>
              )}
            </div>

            <div className="flex flex-col  items-start">
              <label>Address</label>
              <textarea
                className="border-2 border-black rounded-lg p-2"
                cols="30"
                rows="5"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>

              {fillAddress ? (
                ""
              ) : (
                <p className="font-poppins font-normal text-sm text-red-500">
                  Please enter your address
                </p>
              )}
            </div>

            <div className="flex flex-col  items-start">
              <label>Password:</label>
              <input
                className="p-2"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {fillPassword ? (
                ""
              ) : (
                <p className="font-poppins font-normal text-sm text-red-500">
                  Please create a password
                </p>
              )}
            </div>

            <div className="flex flex-col  items-start">
              <label>Confirm Password:</label>
              <input
                className="p-2"
                type="password"
                placeholder="Confirm your password"
                value={confirmPass}
                onChange={handleConfirmPass}
              />

              {passMatch ? (
                ""
              ) : (
                <p className="font-poppins font-normal text-sm text-red-500">
                  Password do not match
                </p>
              )}

              {fillConfirmPass ? (
                ""
              ) : (
                <p className="font-poppins font-normal text-sm text-red-500">
                  Please confirm your password
                </p>
              )}
            </div>

            <div className="flex flex-row items-center gap-2">
              <input
                type="checkbox"
                name="tnc"
                checked={checkedTnc}
                onChange={() => setCheckedTnc((prev) => !prev)}
              />
              <p>I agree to the terms and conditions</p>
            </div>
            {fillTnc ? (
              ""
            ) : (
              <p className="font-poppins font-normal text-sm text-red-500">
                You must agree to the terms and conditions
              </p>
            )}

            <div className="w-full flex justify-center">
              <Button
                text="submit"
                path="/"
                home={true}
                className={
                  "bg-[#D2AFFF] w-1/2 text-center text-white px-4 py-2 rounded-full cursor-pointer hover:bg-[#b67eff] transition duration-200"
                }
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
