import React, { useState } from "react";
import "./Login.css";
import { RiLockPasswordLine, RiLinkedinLine } from "react-icons/ri";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import text from "./text.svg";
import man from "./man.svg";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const userHandler = (e) => {
    setUser(e.target.value);
    console.log(e.target.value, "email");
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value, "password");
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="signin-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <div className="i">
                <AiOutlineUser />
              </div>
              <input
                type="text"
                name="text"
                value={user}
                onChange={userHandler}
                placeholder="Username"
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
            <input type="submit" value="Login" className="btn solid" />

            <p className="social-text">
              Or Sign in with other social platforms
            </p>
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
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Lorem iphcvxs bnbxjkhjgvb saugshxbn wss huiwkjdnsmxbn
              dsjxghvnewdschbn dsxjhgvnewdsxuidwjhq,samxcnd w
              kjhwgdsnjliddwhsxbndjwrhdnsx?
            </p>
            <NavLink to="/Signup">
              <button className="btn transparent" id="sign-up-btn">
                Sign Up
              </button>
            </NavLink>
          </div>
          <img src={text} alt="" className="image" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Lorem iphcvxs bnbxjkhjgvb saugshxbn wss huiwkjdnsmxbn
              dsjxghvnewdschbn dsxjhgvnewdsxuidwjhq,samxcnd w
              kjhwgdsnjliddwhsxbndjwrhdnsx?
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign In
            </button>
          </div>
          <img src={man} alt="" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
