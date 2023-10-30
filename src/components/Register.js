import React, { useState } from "react";
import signup from "../assets/sign-up.svg";
import "../components/Register.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { v4 as uuid } from "uuid";
const Register = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsernma] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ids = uuid();
    let Uniqed = ids.slice(0, 8);

    const request = {
      id: Uniqed,
      email: email,
      username: username,
      password: password,
      role: "supervisor",
    };
    if (username !== "" && email !== "" && password !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Swal.fire({
          position: "top-center",
          icon: "info",
          title: "email tidak valid. Harap isi dengan benar!",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      try {
        const RESPON = await axios.post(
          "  http://localhost:222/accounts",
          request
        );
        console.log(RESPON.data);
        
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Register Berhasil",
          showConfirmButton: false,
          timer: 2500,
        });
        Navigate("/login");
        console.log("update");
      } catch (error) {
        console.log(error);
      }
     
    } else {
      Swal.fire({
        position: "top-center",
        icon: "info",
        title: "harap isi semua kolom",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <div className="bg-[#b3a492] overflow-hidden  flex items-center justify-center lg:h-[100vh] md:h-[100vh] md:w-full justify-center lg:p-[100px]  py-[50px] px-[15px] ">
        <div className="lg:gap-[70px] md:gap-[40px] flex items-center justify-center  gap-[30px]  flex flex-col lg:flex-row md:flex-row justify-center lg:p-[50px]">
          <div className="flex items-center  md:w-[300px] lg:w-[100vh] w-full">
            <img
              src={signup}
              alt="signup"
              className="lg:w-[700px] md:w-[400px]"
            />
          </div>
          <div className="h1-register justify-center flex flex-col   lg:p-[20px]  ">
            <h1 className="font-bold lg:text-[25px]">REGISTER</h1>
            <p className="text-[13px] lg:text-[19px] ">
              Masuk dan ciptakan ruangan impian anda
            </p>
            <div className="flex flex-col lg:gap-[30px] md:gap-[8px] gap-[5px]">
              <form action="" onSubmit={handleSubmit}>
                <div className="flex flex-col lg:gap-[px]">
                  <div className="flex flex-col lg:gap-[10px]">
                    <input
                      id="usernmae"
                      value={username}
                      onChange={(e) => setUsernma(e.target.value)}
                      name="username"
                      placeholder="Your Username"
                      type="text"
                      className="lg:w-full md:w-full w-[250px] md:h-[32px] lg:h-[35px] h-[25px] lg:rounded-[5px] md:rounded-[4px] rounded-[3px] border-0 bg-[lightgray] p-[10px] mb-[5px]" // Tambahkan mb untuk margin-bottom
                    />

                    <input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      placeholder="Your Email"
                      type="text"
                      className="lg:w-full md:w-full w-[250px] md:h-[32px] lg:h-[35px] h-[25px] lg:rounded-[5px] md:rounded-[4px] rounded-[3px] border-0 bg-[lightgray] p-[10px] mb-[5px]" // Tambahkan mb untuk margin-bottom
                    />
                  </div>
                </div>
                <div className="flex lg:gap-[10px] md:gap-[6px] gap-[5px]  ">
                  <input
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your Password"
                    type="password"
                    className="lg:w-full md:w-full w-[165px] md:h-[32px] lg:h-[35px] h-[25px] lg:rounded-[5px] md:rounded-[4px] rounded-[3px] border-0 bg-[lightgray] p-[10px] mb-[5px]" // Tambahkan mb untuk margin-bottom
                  />

                  <button type="submit" className="lg:w-[140px] md:w-[85px] w-[80px] lg:h-[38px] md:h-[34px] h-[25px] lg:rounded-[10px] md:rounded-[6px] rounded-[3px] bg-[#6C5F5B] border-0">
                   SIGN UP
                  </button>
                </div>
              </form>
            </div>

            <div className="text-[13px] lg:text-[19px] ">
              <p className="">
                Belum punya akun silahkan <></>
                <Link to="/login" className="hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
