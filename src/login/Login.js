import React from "react";
import "./Login.css";
import { RiLockPasswordLine, RiLinkedinLine } from "react-icons/ri";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineUser } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Login = () => {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="signin-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <div className='i'><AiOutlineUser /></div>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <div className='i'><RiLockPasswordLine /></div>
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
                <FiTwitter />
              </p>
              <p className='social-icon'>
                <RiLinkedinLine />
              </p>
              <p className='social-icon'>
                <AiOutlineInstagram />
              </p>
            </div>
          </form>

          <form action="" className="signup-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <div className='i'><AiOutlineUser /></div>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <div className='i'><SiGmail /></div>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <div className='i'><RiLockPasswordLine /></div>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign up" className="btn solid" />

            <p className="social-text">
              Or Sign up with other social platforms
            </p>
            <div className="social-media">
              <p className='social-icon'>
                <FiFacebook />
              </p>
              <p className='social-icon'>
                <FiTwitter />
              </p>
              <p className='social-icon'>
                <RiLinkedinLine />
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
