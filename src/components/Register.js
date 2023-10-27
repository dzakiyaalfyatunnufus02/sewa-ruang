import React from "react";
import signup from "../assets/sign-up.svg";
import "../components/Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="bg-[#b3a492] overflow-hidden flex items-center lg:h-[100vh] md:w-full justify-center">
        <div className="lg:gap-[70px] md:gap-[40px] gap-[15px] md:p-[160px] p-[90px] flex flex-col lg:flex-row md:flex-row justify-center">
          <div className="flex items-center md:w-[300px] lg:w-[400px]">
            <img
              src={signup}
              alt="signup"
              className="lg:w-[400px] md:w-[400px]"
            />
          </div>
          <div className="h1-register">
            <h1 className="font-bold lg:text-[25px]">REGISTER</h1>
            <p className="text-[13px] lg:text-[19px] ">
              Masuk dan ciptakan ruangan impian anda
            </p>
            <div className="flex flex-col lg:gap-[10px] md:gap-[8px] gap-[5px]">
              <div className="flex flex-col lg:gap-[10px]">
                <div className="flex flex-col lg:gap-[10px]">
                  <input
                    placeholder="First Name"
                    type="text"
                    className="lg:w-[350px] md:w-[262px] w-[250px] md:h-[32px] lg:h-[35px] h-[25px] lg:rounded-[5px] md:rounded-[4px] rounded-[3px] border-0 bg-[lightgray] lg:p-[10px] md:p-[6px] p-[10px] mb-[5px]" // Tambahkan mb untuk margin-bottom
                  />
                  <input
                    placeholder="Last Name"
                    type="text"
                    className="lg:w-[350px] md:w-[262px] w-[250px] md:h-[32px] lg:h-[35px] h-[25px] lg:rounded-[5px] md:rounded-[4px] rounded-[3px] border-0 bg-[lightgray] lg:p-[10px] md:p-[6px] p-[10px] mb-[5px]" // Tambahkan mb untuk margin-bottom
                  />
                  <input
                    placeholder="Your Email"
                    type="text"
                    className="lg:w-[350px] md:w-[262px] w-[250px] md:h-[32px] lg:h-[35px] h-[25px] lg:rounded-[5px] md:rounded-[4px] rounded-[3px] border-0 bg-[lightgray] lg:p-[10px] md:p-[6px] p-[10px] mb-[5px]" // Tambahkan mb untuk margin-bottom
                  />
                </div>
              </div>
              <div className="flex lg:gap-[10px] md:gap-[6px] gap-[5px] ">
                <input
                  placeholder="Your Password"
                  type="password"
                  className="lg:w-[200px] md:w-[180px] w-[164px] lg:h-[35px] md:h-[32px] h-[25px] border-0 lg:rounded-[5px] md:rounded-[4px] rounded-[3px] bg-[lightgray] p-[10px] mb-[5px]" // Tambahkan mb untuk margin-bottom
                />
                <button className="lg:w-[140px] md:w-[75px] w-[80px] lg:h-[38px] lg:rounded-[10px] md:rounded-[6px] rounded-[3px] bg-[#6C5F5B] border-0">
                  <Link to="/home">SIGN UP</Link>
                </button>
              </div>
            </div>

            <div className="text-[13px] lg:text-[19px] ">
            <p className="">Belum punya akun silahkan login <></>
            <Link to="/login" className="hover:underline" >Login!</Link>
            </p>
           
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
