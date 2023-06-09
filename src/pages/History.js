import React, { useState } from "react";
import Navbar from "src/components/Navbar";
import sample from "src/assets/sample.jpg";
import Rating from "@mui/material/Rating";
import HistoryCard from "src/components/HistoryCard";

const History = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <Navbar />
      </div>
      <div className="bg-[url('src/assets/bg.svg')] w-screen bg-cover bg-no-repeat overflow-hidden">
        <h1 className="font-gaegu text-6xl text-center font-bold sola-shadow py-9">
          Appointment History
        </h1>
        {/* list of teachers */}
        <div className="grid grid-cols-3 gap-4 p-12">
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </div>
      </div>
    </div>
  );
};

export default History;
