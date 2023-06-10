import React from "react";
import logo from "src/assets/lososola2.png"
import bg_top from "src/assets/bg_top_no_sola.png";
import bg_bot from "src/assets/bg_bottom_no_sola.png";
import { useNavigate } from "react-router-dom";


const TeacherSignup = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  
  return (
    <div className="bg-[#E4CFFF]">
      <img src={bg_top} alt="bg_top"/>

       {/* Qualification */}
      <div className="flex justify-center items-center font-gaegu font-bold flex-col py-9 gap-3">
        <img src={logo} alt="logo" className="h-[400px] mt-[-350px] relative" />
        
        {/* Qualification Title */}
        <div>
          <h1 className="font-gaegu text-7xl mt-[-75px] text-center font-bold sola-shadow py-9">
            Teacher's Qualification:
          </h1>
        </div>

        {/* Terms */}
        <ul className="list-disc font-montserrat font-normal text-2xl mt-[-25px]">
          <li>
            Must be minimum bachelor degree in Music
          </li>
          <li>
            Have a minimum one year of teaching experience
          </li>
          <li>
            Having certifications and achievement in Music is a plus
          </li>
        </ul>

        {/* Submission */}
        <div className="flex flex-col gap-7 py-12 relative">

          {/* Submit Title */}
          <h1 className="font-gaegu text-7xl mt-[-15px] text-center font-bold sola-shadow">
            Submit your CV here to apply:
          </h1>

          {/* Drag File */}
          <div className="bg-white w-4/12 mx-auto">
            <div className="px-10 py-20 border-4 border-dashed border-black">
              <div className="border-2 border-black rounded-lg">
                <p className="font-montserrat font-semibold text-base p-2 text-center">
                  SELECT FILE
                </p>
              </div>
              <p className="font-montserrat font-normal text-xs text-center pt-5">
                or drop file here
              </p>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex justify-center text-2xl">
            <div className="flex flex-row items-center gap-2">
              <input type="checkbox"/>
              <p>
                I agree to the <a href="/teacher/terms" className="hover:text-[#6619ff] transition duration-200">terms and condition</a>
              </p>
            </div>
          </div>

          {/* Apply Button */}
          <div className="justify-center flex">
            <button onClick={handleClick} className="bg-[#D2AFFF] text-4xl px-24 py-2 rounded-full cursor-pointer hover:bg-[#6619ff] transition duration-200">Apply</button>
          </div>
        </div>
        
        <div className="py-15">
          <p className="font-montserrat font-normal text-2xl text-center">
            After you have been verified, <br/>
            you will receive an email confirmation <br/>
            consisting your teacher's emial and password
          </p>
        </div>
      </div>
      <img src={bg_bot} alt="bg_bot" className="mt-[-700px]" />
    </div>
  );

};

export default TeacherSignup;
