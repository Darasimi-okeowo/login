import React, { useState } from "react";
import "./Login.css";
import { SiGmail } from "react-icons/si";
import { RiLockPasswordLine, RiLinkedinLine } from "react-icons/ri";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineUser } from "react-icons/ai";

const Signup = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userHandler = (e) => {
    setUser(e.target.value);
    console.log(e.target.value, "email");
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value, "email");
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value, "password");
  };
  return (
    <div>
      <form action="" className="signup-form1">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <div className="i">
            <AiOutlineUser />
          </div>
          <input
            type="text"
            value={user}
            onChange={userHandler}
            placeholder="Username"
          />
        </div>
        <div className="input-field">
          <div className="i">
            <SiGmail />
          </div>
          <input
            type="text"
            value={email}
            onChange={emailHandler}
            placeholder="Email"
          />
        </div>
        <div className="input-field">
          <div className="i">
            <RiLockPasswordLine />
          </div>
          <input
            type="password"
            value={password}
            onChange={passwordHandler}
            placeholder="Password"
          />
        </div>
        <input type="submit" value="Sign up" className="btn solid" />

        <p className="social-text">Or Sign up with other social platforms</p>
        <div className="social-media">
          <p className="social-icon">
            <FiFacebook />
          </p>
          <p className="social-icon">
            <FiTwitter />
          </p>
          <p className="social-icon">
            <RiLinkedinLine />
          </p>
          <p className="social-icon">
            <AiOutlineInstagram />
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
