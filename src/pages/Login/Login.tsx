import React from "react";
import { useNavigate } from "react-router-dom";
import "./_login.scss";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e:any) => {
    e.preventDefault();
    navigate("/home", { replace: true });
  };

  return (
    <div id="wrapper">
      <div className="container">
        <div className="phone-app-demo" />
        <div className="form-data">
          <form action="" onSubmit={handleLogin} >
            <div className="logo">
              <h1>Instagram</h1>
            </div>
            <input required type="text" placeholder="Phone number, username, or email" />
            <input required type="password" placeholder="Password" />
            <button className="form-btn">Log in</button>
            <span className="has-separator">Or</span>
            <a href="#" className="facebook-login">
              <i className="fab fa-facebook" /> Log in with Facebook
            </a>
            <a className="password-reset" href="#">
              Forgot password?
            </a>
          </form>
          <div className="sign-up">
            Don't an account? <a href="#">Sign up</a>
          </div>
          <div className="get-the-app">
            <span>Get the app</span>
            <div className="badge">
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                alt="android App"
              />
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                alt="ios app"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
