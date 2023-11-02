import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import signup from "../assets/sign-up.svg";
import "../components/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [baru, setBaru] = useState([]);
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  const getAccounts = async () => {
    try {
      const response = await axios.get(`http://localhost:222/accounts`);
      const allAccounts = response.data;
      const filteredAccounts = allAccounts.filter(
        (account) =>
          account.username?.toLowerCase().includes("string yang dicocokkan") &&
          account.role !== "supervisor"
      );
      setBaru(filteredAccounts);
      console.log(filteredAccounts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:2222/accounts`);
      if (formdata.username !== "" && formdata.password !== "") {
        const obj = response.data;
        const existingData = obj.find(
          (data) =>
            data.username === formdata.username &&
            data.password === formdata.password
        );
        if (existingData) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Login berhasil",
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.setItem("UserRole", existingData.role);
          localStorage.setItem("id", existingData.id);
          navigate("/home");
        } else {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Username atau password salah",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        Swal.fire({
          position: "top-center",
          icon: "info",
          title: "Harap isi semua kolom",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <div className="bg-[#b3a492] overflow-hidden flex items-center lg:h-[100vh] md:w-full justify-center">
      <div className="lg:gap-[70px] md:gap-[40px] gap-[15px] md:p-[160px] p-[90px] flex flex-col lg:flex-row md:flex-row justify-center">
        <div className="flex items-center md:w-[300px] lg:w-[400px]">
          <img
            src={signup}
            alt="signup"
            className="lg:w-[400px] md:w-[400px]"
          />
        </div>
        <div className="h1-login">
          <h1 className="font-bold lg:text-[25px]">LOGIN</h1>
          <p className="text-[13px] lg:text-[19px] ">
            Masuk dan ciptakan ruangan impian anda
          </p>
          <div className="flex flex-col lg:gap-[10px] md:gap-[7px] gap-[5px]">
            <form
              action=""
              onSubmit={handleSubmit}
              className="input-field"
              id="login"
            >
              <div>
                <input
                  value={formdata.username}
                  onChange={handleChange}
                  name="username"
                  placeholder="Your Username"
                  type="text"
                  className="lg:w-[350px] md:w-[262px] w-[250px] md:h-[32px] lg:h-[35px] h-[25px] lg:rounded-[5px]  md:rounded-[4px] rounded-[3px] border-0 bg-[lightgray]  lg:p-[10px] md:p-[6px] p-[10px]"
                />
              </div>
              <br/>
              <div className="flex lg:gap-[10px] md:gap-[6px] gap-[5px] ">
                <input
                  name="password"
                  value={formdata.password}
                  onChange={handleChange}
                  placeholder="Your Password"
                  type="password"
                  className="lg:w-[200px] md:w-[180px] w-[164px] lg:h-[35px] md:h-[32px] h-[25px] border-0 lg:rounded-[5px] md:rounded-[4px] rounded-[3px] bg-[lightgray]  p-[10px]"
                />
                <button
                  type="submit"
                  className="lg:w-[140px] md:w-[75px] w-[80px] lg:h-[38px] lg:rounded-[10px] md:rounded-[6px] rounded-[3px] bg-[#6C5F5B] border-0"
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>

          <br />
          <div className="text-[13px] lg:text-[19px] ">
            <p className="">
              Belum punya akun silahkan <></>
              <Link to="/register" className="hover:underline">
                REGISTER
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
