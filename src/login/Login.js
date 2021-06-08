import React from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Login = () => {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="signin-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <div className='i'><FaUser /></div>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <div className='i'><FaLock /></div>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />

            <p className="social-text">
              Or Sign in with other social platforms
            </p>
            <div className="social-media">
              <p className='social-icon'>
                <FiFacebook />
              </p>
              <p className='social-icon'>
                <AiOutlineTwitter />
              </p>
              <p className='social-icon'>
                <FaLinkedinIn />
              </p>
              <p className='social-icon'>
                <AiOutlineInstagram />
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container"></div>
    </div>
  );
};

export default Login;
