import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const EditCostumer = () => {
  const [search, setSearch] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);

  function toggleUserMenu() {
    var userMenu = document.getElementById("user-menu");
    var isExpanded = userMenu.getAttribute("aria-expanded");

    if (isExpanded === "true") {
      // User menu is currently open, close it
      userMenu.setAttribute("aria-expanded", "false");
    } else {
      // User menu is currently closed, open it and show the alert
      userMenu.setAttribute("aria-expanded", "true");
      alert("User menu clicked!");
    }
  }

  return (
    <>
      <div className="bg-[#B3A492] lg:w-full md:w-[100%] w-[100%] md:h-[100vh] h-[100vh] lg:p-[55px] md:p-[100px] py-[50px] px-[30px] ">
        <center>
          {" "}
          <div className="bg-[#BFB29E] shadow-lg flex flex-col lg:flex-row md:flex-row items-center w-full justify-center text-center p-[10px] md:p-[25px] lg:p-[70px]">
            <div className="    lg:w-[820px] md:w-[780px] ">
              <div className=" lg:gap-[10px]">
                <div className="lg:gap-[10px]">
                  <p className="font-bold lg:mb-[10px] md:mb-[8px] mb-[5px] lg:text-[25px]">
                    Dz's Edit Costumer
                  </p>
                  <p className="italic">
                    {" "}
                   Ubah ruangan dengan mengisi formulir di samping ini dan
                    nikmati kenyaman fasilitas kami
                  </p>
                </div>
                <div>
                  <p className="italic">Terimakasih karena telah memilih kami</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:p-[10px] md:p-[15px] p-[10px]">
              <div>
                <input
                  placeholder="Rooms"
                  type="text"
                  className="lg:w-[350px] md:w-[262px] w-[160px] md:h-[32px] lg:h-[35px] h-[25px] lg:rounded-[5px] md:rounded-[4px] rounded-[3px] border-0 bg-[lightgray] lg:p-[10px] md:p-[6px] p-[10px] mb-[5px]" // Tambahkan mb untuk margin-bottom
                />
                <input
                  placeholder="Capacity"
                  type="text"
                  className="lg:w-[350px] md:w-[262px] w-[160px] md:h-[32px] lg:h-[35px] h-[25px] lg:rounded-[5px] md:rounded-[4px] rounded-[3px] border-0 bg-[lightgray] lg:p-[10px] md:p-[6px] p-[10px] mb-[5px]" // Tambahkan mb untuk margin-bottom
                />
                <input
                  placeholder="Your Email"
                  type="text"
                  className="lg:w-[350px] md:w-[262px] w-[160px] md:h-[32px] lg:h-[35px] h-[25px] lg:rounded-[5px] md:rounded-[4px] rounded-[3px] border-0 bg-[lightgray] lg:p-[10px] md:p-[6px] p-[10px] mb-[5px]" // Tambahkan mb untuk margin-bottom
                />
              </div>
              <div className="flex flex-col lg:gap-[20px] justify-between">
                <div className="flex flex-col lg:gap-[5px] justify-between">
                  <div className="flex flex-col text-center justify-between lg:gap-[10px]">
                    <div className="flex flex-col lg:gap-[10px] ">
                      <span >
                        <label className="lg:mr-[150px] lg:ml-[10px] md:mr-[106px] md:ml-[10px] mt-[5px]">Snack:</label>
                        <select
                          value={recordsPerPage}
                          onChange={(e) =>
                            setCurrentPage(1) ||
                            setRecordsPerPage(Number(e.target.value))
                          }
                          className="lg:w-[155px] lg:h-[30px] h-[30px] md:w-[86px]  lg:h-[40px] text-[15px] rounded-[5px] mr-[10px]"
                        >
                          <option className="lg:w-[100px]" value={false}>
                            false
                          </option>
                          <option value={true}>true</option>
                        </select>
                      </span>
                    </div>
                    <div className="md:mt-[5px] mt-[5px]">
                    <span>
                    <label className="lg:mr-[150px] lg:ml-[10px] md:mr-[106px] md:ml-[10px] mt-[5px]">Lunch:</label>
                    <select
                      value={recordsPerPage}
                      onChange={(e) =>
                        setCurrentPage(1) ||
                        setRecordsPerPage(Number(e.target.value))
                      }
                      className="lg:w-[155px] lg:h-[30px] h-[30px] md:w-[86px]  lg:h-[40px] text-[15px] rounded-[5px] mr-[10px]"
                    >
                      <option value={false}>false</option>
                      <option value={true}>true</option>
                    </select>
                  </span>
                    </div>
                    <div className="md:mt-[5px] mt-[5px]">
                    <span>
                    <label className="lg:mr-[125px] lg:ml-[10px] md:mr-[82px] md:ml-[10px] mr-[0px] ml-[5px] mt-[5px]">Extratime:</label>
                    <select
                      value={recordsPerPage}
                      onChange={(e) =>
                        setCurrentPage(1) ||
                        setRecordsPerPage(Number(e.target.value))
                      }
                      className="lg:w-[155px] lg:h-[30px] h-[30px] md:w-[86px]  lg:h-[40px] text-[15px] rounded-[5px] md:mr-[8px]"
                    >
                      <option value={false}>false</option>
                      <option value={true}>true</option>
                    </select>
                  </span>
                    </div>
                  </div>

                  
                 
                </div>
                <div className="flex justify-center lg:p-[10px] md:p-[10px] p-[7px] lg:gap-[10px] md:gap-[8px] gap-[5px] ">
                  <button className="bg-stone-800 text-white lg:p-[3px] md:p-[3px]  lg:w-[100px] md:w-[70px] w-[55px] lg:rounded-[10px] md:rounded-[7px] rounded-[5px] ">
                    Create
                  </button>
                  <button className="bg-red-900 text-white lg:p-[3px] md:p-[3px] md:w-[60px] lg:w-[80px] w-[40px] lg:rounded-[10px] md:rounded-[7px] rounded-[5px] ">
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};

export default EditCostumer;
