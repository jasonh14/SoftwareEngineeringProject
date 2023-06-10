import React from "react";
import blu from "src/assets/blu.svg";
import Radio from "@mui/material/Radio";
import { lightBlue } from "@mui/material/colors";
import ClickAwayListener from "react-click-away-listener";

const SelectPayment = ({
  selectedPayment,
  handlePayment,
  openDetail,
  closeDetail,
}) => {
  return (
    <>
      <div className="fixed z-20 h-screen w-screen bg-black top-0 left-0 opacity-25 flex"></div>
      <div className="fixed z-40 w-screen h-screen top-0 left-0 flex justify-center items-center">
        {/* Click Away */}
        <ClickAwayListener onClickAway={closeDetail}>
          <div className="bg-white p-12 rounded-xl font-gaegu w-[600px]">
            <div className="text-center text-2xl py-2 font-semibold">
              Select Payment Method
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col flex-1 gap-2">
                <p>Digital Wallet</p>
                <div className="flex flex-row justify-center items-center p-4 bg-black rounded-lg gap-4">
                  <img src={blu} alt="blu" />
                  <p className="text-white text-sm font-poppins">
                    Pay with blu BCA
                  </p>
                  <Radio
                    checked={selectedPayment === "blu"}
                    onChange={handlePayment}
                    value="blu"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                    sx={{
                      color: lightBlue[800],
                      "&.Mui-checked": {
                        color: lightBlue[600],
                      },
                    }}
                  />
                </div>
                <div className="flex flex-row justify-center items-center p-4 bg-black rounded-lg gap-4">
                  <img src={blu} alt="blu" />
                  <p className="text-white text-sm font-poppins">
                    Pay with blu BCA
                  </p>
                  <Radio
                    checked={selectedPayment === "blu"}
                    onChange={handlePayment}
                    value="blu"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                    sx={{
                      color: lightBlue[800],
                      "&.Mui-checked": {
                        color: lightBlue[600],
                      },
                    }}
                  />
                </div>
                <div className="flex flex-row justify-center items-center p-4 bg-black rounded-lg gap-4">
                  <img src={blu} alt="blu" />
                  <p className="text-white text-sm font-poppins">
                    Pay with blu BCA
                  </p>
                  <Radio
                    checked={selectedPayment === "blu"}
                    onChange={handlePayment}
                    value="blu"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                    sx={{
                      color: lightBlue[800],
                      "&.Mui-checked": {
                        color: lightBlue[600],
                      },
                    }}
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col flex-1 gap-2">
                  <p>Other payment methods</p>
                  <div className="flex flex-row justify-center bg-black items-center p-4  rounded-lg gap-4">
                    <img src={blu} alt="blu" />
                    <p className="text-white text-sm font-poppins">
                      Pay with blu BCA
                    </p>
                    <Radio
                      checked={selectedPayment === "blu"}
                      onChange={handlePayment}
                      value="blu"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                      sx={{
                        color: lightBlue[800],
                        "&.Mui-checked": {
                          color: lightBlue[600],
                        },
                      }}
                    />
                  </div>
                  <div className="flex flex-row justify-center items-center p-4 bg-black rounded-lg gap-4">
                    <img src={blu} alt="blu" />
                    <p className="text-white text-sm font-poppins">
                      Pay with blu BCA
                    </p>
                    <Radio
                      checked={selectedPayment === "blu"}
                      onChange={handlePayment}
                      value="blu"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                      sx={{
                        color: lightBlue[800],
                        "&.Mui-checked": {
                          color: lightBlue[600],
                        },
                      }}
                    />
                  </div>
                  <div className="flex flex-row justify-start items-center py-4  gap-4">
                    <button className="px-4 py-2 rounded-lg border-2 border-black bg-black text-white">
                      Ok
                    </button>
                    <button
                      onClick={closeDetail}
                      className="px-4 py-2 rounded-lg border-2 border-black bg-white text-black"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ClickAwayListener>
      </div>
    </>
  );
};

export default SelectPayment;
