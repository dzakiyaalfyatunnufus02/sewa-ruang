import React from "react";
import signup from "../assets/sign-up.svg";
import "../components/Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="register">
        <div className="head-register">
          <div className="img-wrap-register" >
            <img src={signup} alt="signup" className="img-register" />
          </div>
          <div className="h1-register">
            <h1>REGISTER</h1>
            <p>Masuk dan ciptakan ruangan impian anda</p>
            <div className="gap-register">
              <div id="input-register">
                {" "}
                <input
                  placeholder="First Name "
                  type="text"
                  className="input1-register p-[10px]"
                />
                <input
                  placeholder="Last Name "
                  type="text"
                  className="input1-register p-[10px]"
                />
                <input
                  placeholder="Your Email "
                  type="text"
                  className="input1-register p-[10px]"
                />
              </div>
              <div className="inpt-btn-register">
                <input
                  placeholder="Your Password"
                  type="password"
                  className="input2-register p-[10px]"
                />
                <button className="btn-register"> Submit</button>
              </div>
            </div>

            <div className="register-register">
              <p>
                Sudah punya akun silahkan log in <></>
                <Link to="/login">LOGIN!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
