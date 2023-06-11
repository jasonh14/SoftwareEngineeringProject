import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import sample from "src/assets/sample.jpg";
import { Rating } from "@mui/material";
import line from "src/assets/line.svg";
import whatsapp from "src/assets/whatsapp.svg";
import DatePicker from "react-datepicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import calendar from "src/assets/calender.svg";
import clock from "src/assets/time.svg";
import online from "src/assets/online.svg";
import blu from "src/assets/blu.svg";
import arrow from "src/assets/arrow.svg";
import SelectPayment from "src/components/SelectPayment";
import BookConfirm from "src/components/BookConfirm";
import back from "src/assets/back.svg";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { firestore } from "src/firebase";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import defPhoto from "src/assets/user.png";
import { Link } from "react-router-dom";
import TeacherProfile from "./TeacherProfile";
import gopay from "src/assets/gopay.svg";
import ovo from "src/assets/ovo.svg";
import bank from "src/assets/banktransfer.svg";
import debit from "src/assets/debit.svg";

const Book = () => {
  let navigate = useNavigate();
  let { uid } = useParams();

  const [teacher, setTeacher] = useState([]);
  console.log(teacher.rating);
  const [startDate, setStartDate] = useState(null);
  const [time, setTime] = useState(dayjs("2022-04-17T15:30"));
  const [selectedPayment, setSelectedPayment] = React.useState("blu");
  const [showPaymentDetail, setShowPaymentDetail] = useState(false);
  const [showBookConfirm, setShowBookConfirm] = useState(false);
  const [loading, setLoading] = useState(true);

  const handlePayment = (event) => {
    setSelectedPayment(event.target.value);
  };

  const getTeacherByUid = async () => {
    const usersCollectionRef = collection(firestore, "teachers");

    // Create a query to filter documents based on the UID field
    const q = query(usersCollectionRef, where("uid", "==", uid));

    try {
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size > 0) {
        // Assuming there's only one document matching the UID
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        // Access the user data
        console.log("User data:", userData);
        setTeacher(userData);
      } else {
        console.log("No teacher found with the given UID");
      }
    } catch (error) {
      console.error("Error retrieving user:", error);
    }
  };

  const paymentImage = () => {
    if (selectedPayment === "blu") {
      return blu;
    } else if (selectedPayment === "ovo") {
      return ovo;
    } else if (selectedPayment === "gopay") {
      return gopay;
    } else if (selectedPayment === "card") {
      return debit;
    } else if (selectedPayment === "bank") {
      return bank;
    }
  };

  const firstLoad = async () => {
    await getTeacherByUid();
    setLoading(false);
  };

  useEffect(() => {
    firstLoad();
  }, []);

  const [learningMode, setLearningMode] = useState("");

  const handleLearningMode = (event) => {
    setLearningMode(event.target.value);
  };

  const openDetail = () => {
    setShowPaymentDetail(true);
  };

  const closeDetail = () => {
    setShowPaymentDetail(false);
  };

  const closeBookConfirm = () => {
    setShowBookConfirm(false);
  };

  const formatNumber = (number) => {
    const formattedNumber = number.toLocaleString("en-US").replace(",", ".");

    return formattedNumber;
  };

  const confirmBook = async () => {
    try {
      const currentUser = JSON.parse(localStorage.getItem("userProfile"));

      const data = {
        teacherName: teacher.name,
        date: startDate,
        rating: teacher.rating,
        studentName: currentUser.name,
        time: time.$d,
        learningMode: learningMode,
        teacherUid: teacher.uid,
        studentUid: currentUser.uid,
      };

      const appointmentCollectionRef = collection(firestore, "appointment");

      const docRef = await addDoc(appointmentCollectionRef, data);
      console.log(
        "Appointment created and data stored in Firestore:",
        docRef.id
      );
      setBookConfirm(true);
    } catch (err) {
      console.log(err);
    }
  };

  const [bookConfirm, setBookConfirm] = useState(false);

  if (loading) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <>
        <img
          onClick={() => navigate(-1)}
          className="w-[50px] h-[50px] cursor-pointer absolute top-4 left-4 "
          src={back}
          alt="back"
        />
        {showBookConfirm && (
          <BookConfirm
            date={startDate}
            time={time}
            learningMode={learningMode}
            selectedPayment={selectedPayment}
            closeBookConfirm={closeBookConfirm}
            confirmBook={confirmBook}
            bookConfirm={bookConfirm}
          />
        )}

        {showPaymentDetail && (
          <SelectPayment
            selectedPayment={selectedPayment}
            handlePayment={handlePayment}
            openDetail={openDetail}
            closeDetail={closeDetail}
          />
        )}

        <div className="flex flex-row gap-4 p-6 items-center justify-center">
          <div className="flex-1">
            <div className="flex flex-row items-center gap-4">
              <div className="h-[150px] w-[150px] overflow-hidden rounded-full">
                <img
                  src={teacher.photo === "" ? defPhoto : teacher.photo}
                  alt="sample"
                />
              </div>
              <div>
                <div className="font-gaegu">
                  <h1 className="font-semibold text-2xl">{teacher.name}</h1>

                  <div className="flex flex-row gap-2">
                    {teacher.rating}
                    <Rating
                      name="simple-controlled"
                      value={teacher.rating}
                      onChange={(e) =>
                        setTeacher((prev) => ({
                          ...prev,
                          rating: e.target.value,
                        }))
                      }
                    />
                    <p>(77)</p>
                  </div>
                  <p className="bg-[#D2AFFF] px-4 py-2 my-2 rounded-full">
                    Price: Rp {formatNumber(teacher.price)} / Session
                  </p>
                </div>
              </div>
            </div>

            <div className="font-gaegu">
              <h1 className="font-semibold text-3xl py-4">Profile</h1>
              <p className="text-xl">
                {teacher.desc === "" ? "-" : teacher.desc}
              </p>
              <h1 className="font-semibold text-3xl py-4">Experience</h1>
              <Link to={teacher.cv} target="_blank">
                <div className="w-1/2  py-2 text-black flex justify-center items-center border-2 border-black">
                  {teacher.name}’s CURRICULUM VITAE (CV)
                </div>
              </Link>
            </div>
            <div className="mt-4 font-gaegu bg-[#D2AFFF] p-4 rounded-xl">
              <div className="text-3xl">
                For more information, you can contact him directly on:
              </div>
              <div className="flex flex-row gap-2 p-4">
                <div className="flex flex-row items-center gap-2">
                  <img src={line} alt="line" />
                  <p className="text-xl">{teacher.line}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img src={whatsapp} alt="line" />
                  <p className="text-xl">{teacher.whatsapp}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 p-4">
            <form className="rounded-t-lg p-4">
              <div className="border-2 border-b-0 border-black bg-[#D2AFFF] p-4 rounded-t-xl text-center font-gaegu text-2xl font-semibold">
                Reserve your spot
              </div>
              <div className="border-2 border-black rounded-b-xl p-4">
                {/* time */}
                <div className="flex flex-col items-center justify-center gap-4 ">
                  <h1 className="font-gaegu text-center text-2xl font-semibold mt-4 mb-2">
                    Fill date and time
                  </h1>
                  <div className="flex justify-center p-2 rounded-lg border-black border-2 gap-2 items-center">
                    <div>
                      <img className="w-full" src={calendar} alt="time" />
                    </div>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Select a date"
                    />
                  </div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className="flex flex-row items-center justify-center gap-2 border-2 border-black rounded-lg p-2">
                      <div className="">
                        <img className="w-full" src={clock} alt="time" />
                      </div>
                      <TimePicker
                        value={time}
                        onChange={(newTime) => setTime(newTime)}
                        className="border-2 border-white"
                      />
                    </div>
                  </LocalizationProvider>
                </div>
                {/* learning mode */}
                <div className="flex flex-col items-center justify-center gap-4">
                  <h1 className="text-center font-gaegu text-2xl font-semibold pt-4">
                    Select Learning Mode
                  </h1>
                  <div className="flex flex-row items-center justify-center border-2 border-black rounded-lg p-2">
                    <div>
                      <img className="w-full" src={online} alt="" />
                    </div>
                    <select
                      className="p-4"
                      value={learningMode}
                      onChange={handleLearningMode}
                    >
                      <option value="" disabled hidden>
                        Select an option
                      </option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                    </select>
                  </div>
                </div>
                {/* payment */}
                <div className="flex flex-col items-center justify-center gap-4 py-4">
                  <h1 className="text-center font-gaegu text-2xl font-semibold pt-4">
                    Select payment method
                  </h1>
                  <div
                    onClick={openDetail}
                    className="flex flex-row justify-center items-center p-4 bg-black rounded-lg gap-4"
                  >
                    <img src={paymentImage()} alt="blu" />
                    <p className="cursor-pointer text-white text-lg font-poppins">
                      {selectedPayment}
                    </p>
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div
                    onClick={() => setShowBookConfirm(true)}
                    className="cursor-pointer rounded-full py-2 px-4 bg-white border-2 border-black font-gaegu font-semibold"
                  >
                    Confirm
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
};

export default Book;
