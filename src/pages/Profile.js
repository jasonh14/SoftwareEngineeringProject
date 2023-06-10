import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mainIcon from "src/assets/mainIcon.svg";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "src/firebase";
import sample from "src/assets/sample.jpg";
import Navbar from "src/components/Navbar";
import photoDef from "src/assets/user.png";
import EditProfile from "src/components/EditProfile";
import EditDescription from "src/components/EditDescription";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  const [showEdit, setShowEdit] = useState(false);
  const [showEditDesc, setShowEditDesc] = useState(false);
  const navigate = useNavigate();
  // console.log("user state", user);
  const getUserByUID = async (uid) => {
    const usersCollectionRef = collection(firestore, "users");

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
        setUser(userData);

        // You can return the user data or perform other operations with it
        localStorage.setItem("userProfile", JSON.stringify(userData));
      } else {
        console.log("No user found with the given UID");
      }
    } catch (error) {
      console.error("Error retrieving user:", error);
    }
  };

  const fetchData = async () => {
    try {
      // Retrieve user data from local storage
      const userData = localStorage.getItem("userData");
      const { uid } = JSON.parse(userData);
      console.log(uid);
      getUserByUID(uid);
    } catch (err) {
      console.log(err);
    }
  };

  const firstLoad = async () => {
    await fetchData();
  };

  const handleLogout = async () => {
    const auth = getAuth();

    try {
      await signOut(auth);
      // Redirect to the desired page after successful logout
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const formatDate = (seconds) => {
    const milliseconds = seconds * 1000; // Convert seconds to milliseconds
    const date = new Date(milliseconds);

    // Extract day, month, and year components
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
    const year = date.getFullYear().toString();

    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    console.log("test");
    firstLoad();
    const localData = JSON.parse(localStorage.getItem("userProfile"));
    setUser(localData);
  }, []);

  return (
    <>
      {showEdit && <EditProfile user={user} setShowEdit={setShowEdit} />}
      {showEditDesc && (
        <EditDescription user={user} setShowEditDesc={setShowEditDesc} />
      )}

      <div>
        <Navbar user={user} />
        <div>
          <div className="w-screen h-[150px] bg-slate-400"></div>
          <div className="flex flex-row justify-start py-4 gap-12 items-start">
            {/* photo */}
            <div className="flex-1 flex gap-4 flex-col items-end justify-center">
              <div className="mt-[-75px] bg-white h-[200px] w-[200px] flex justify-center overflow-hidden rounded-full border-4 border-[#D2AFFF]">
                <img
                  src={user.photo === "" ? photoDef : user.photo}
                  alt="foto"
                />
              </div>
              <div
                onClick={handleLogout}
                className="w-1/4 bg-[#D2AFFF] p-2 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6619ff] transition duration-200"
              >
                <p className="text-2xl font-gaegu">Logout</p>
              </div>
            </div>
            {/* profile */}
            <div className="flex-1 font-gaegu flex items-start flex-col justify-start">
              <div className="flex justify-between w-full pr-12">
                <div>
                  <h1 className="text-3xl font-semibold">Profile</h1>
                  <p className="text-xl">{user.description}</p>
                </div>
                <div className="flex flex-col gap-4">
                  <span
                    onClick={() => setShowEdit(true)}
                    className=" bg-[#D2AFFF]  py-2 px-4 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6619ff] transition duration-200"
                  >
                    <p className="text-2xl font-gaegu">Edit Photo</p>
                  </span>
                  <span
                    onClick={() => setShowEditDesc(true)}
                    className=" bg-[#D2AFFF] py-2 px-4 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6619ff] transition duration-200"
                  >
                    <p className="text-2xl font-gaegu">Edit Description</p>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-semibold">Gender</h1>
                <p className="text-xl">{user.gender}</p>
              </div>
              <div>
                <h1 className="text-3xl font-semibold">Date of Birth</h1>
                <p className="text-xl">{formatDate(user.date?.seconds)}</p>
              </div>
              <div>
                <h1 className="text-3xl font-semibold">Email</h1>
                <p className="text-xl">{user.email}</p>
              </div>
              <div>
                <h1 className="text-3xl font-semibold">City of Residence</h1>
                <p className="text-xl">{user.city}</p>
              </div>
              <div>
                <h1 className="text-3xl font-semibold">Address</h1>
                <p className="text-xl">{user.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
