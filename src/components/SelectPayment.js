import React from "react";
import blu from "src/assets/blu.svg";
import Radio from "@mui/material/Radio";
import { lightBlue } from "@mui/material/colors";
import ClickAwayListener from "react-click-away-listener";
import gopay from "src/assets/gopay.svg";
import ovo from "src/assets/ovo.svg";
import bank from "src/assets/banktransfer.svg";
import debit from "src/assets/debit.svg";

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
                <div className="flex flex-row justify-between  items-center p-4 bg-black rounded-lg gap-4">
                  <div className="flex flex-row gap-2 items-center">
                    <img src={blu} alt="blu" />
                    <p className="text-white text-sm font-poppins">
                      Pay with blu BCA
                    </p>
                  </div>
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

                <div className="flex flex-row justify-between  items-center p-4 bg-black rounded-lg gap-4">
                  <div className="flex flex-row gap-2 items-center">
                    <img src={ovo} alt="Ovo" />
                    <p className="text-white text-sm font-poppins">Ovo</p>
                  </div>
                  <Radio
                    checked={selectedPayment === "ovo"}
                    onChange={handlePayment}
                    value="ovo"
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

                <div className="flex flex-row justify-between  items-center p-4 bg-black rounded-lg gap-4">
                  <div className="flex flex-row gap-2 items-center">
                    <img src={gopay} alt="gopay" />
                    <p className="text-white text-sm font-poppins">Gopay </p>
                  </div>
                  <Radio
                    checked={selectedPayment === "gopay"}
                    onChange={handlePayment}
                    value="gopay"
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
                  <div className="flex flex-row justify-between  items-center p-4 bg-black rounded-lg gap-4">
                    <div className="flex flex-row gap-2 items-center">
                      <img src={debit} alt="card" />
                      <p className="text-white text-sm font-poppins">
                        Add Debit/Credit Card
                      </p>
                    </div>
                    <Radio
                      checked={selectedPayment === "card"}
                      onChange={handlePayment}
                      value="card"
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
                  <div className="flex flex-row justify-between  items-center p-4 bg-black rounded-lg gap-4">
                    <div className="flex flex-row gap-2 items-center">
                      <img src={bank} alt="bank" />
                      <p className="text-white text-sm font-poppins">
                        Bank Transfer
                      </p>
                    </div>
                    <Radio
                      checked={selectedPayment === "bank"}
                      onChange={handlePayment}
                      value="bank"
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

                  <div className="flex flex-row gap-4 justify-end">
                    <div
                      onClick={closeDetail}
                      className="bg-black rounded-xl py-2 px-6 text-white"
                    >
                      Ok
                    </div>
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
