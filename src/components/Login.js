import React from "react";
import "../components/Login.css";
import signup from "../assets/sign-up.svg";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      {" "}
      <div className="login">
      <div className="head-login">
        <div className="img-warap-login">
          <img src={signup} alt="signup" className="img-login" />
        </div>
        <div className="h1-login" style={{}}>
          <h1>LOGIN</h1>
          <p>Masuk dan ciptakan ruangan impian anda</p>
          <div className="gap-login">
          <div>
            {" "}
            <input
              placeholder="Your Email"
              type="text"
              className="input1-login"
            />
          </div>
          <div className="inpt-btn-login">
            <input
              placeholder="Your Password"
              type="password"
              className="input2-login"
            />
            <button className="btn-login"> SIGN UP</button>
          </div>
          </div>
        
          <br/>
          <div className="register-login">
            <p>Belum punya akun silahkan register <></>
            <Link to="/register">REGISTER!</Link>
            </p>
           
          </div>
        </div>
        
      </div>
      </div>
    
    </>
  );
};

export default Login;
