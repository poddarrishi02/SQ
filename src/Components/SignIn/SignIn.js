import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";
import { ReactComponent as Back } from "./../../assets/Illustration.svg";
import { ReactComponent as Logo } from "./../../assets/Logo.svg";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from "axios";
import { AuthContext } from "../../store/auth-context";
const clientId =
  "305778371008-irfmq4n8siojbbsif8haml7lcr1jcpsj.apps.googleusercontent.com";

function SignIn() {
  let navigate = useNavigate();
  const AuthCtx = useContext(AuthContext);
  const onLoginSuccess = async (res) => {
    console.log("Login Success:", res.profileObj);
    AuthCtx.login("dummyEmail", "dummyPassword");
    // alert("NAVIGATINGG")
    navigate("/main");
    // alert("NAVIGATed")
    // const link = "http://localhost:8000";
    // console.log(`${link}`);
    // await axios.post(`${link}/`, { res });
    // console.log("Hi");
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div style={{ margin: "2em 0 0" }}>
          <Logo />
        </div>
        <div style={{ margin: "2em 0" }}>
          <Back />
        </div>
        <div style={{ margin: "1em 0" }}>Welcome Back!</div>
        <div>
          Sign In to explore a world of<br></br> quantitative investment
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.box}>
          <div className={styles.title}>Sign In to Your Account</div>
          <div className={styles.button_cover}>
            <GoogleLogin
              className={styles.google}
              clientId={clientId}
              buttonText="Sign In"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </div>
          <div className={styles.or}>OR</div>
          <div className={styles.input_cover}>
            <div className={styles.input_head}>Email Address</div>
            <input
              className={styles.input}
              type="email"
              placeholder="olivertwist@mail.com"
              disabled
            />
          </div>
          <div className={styles.input_cover}>
            <div className={styles.input_head}>Password</div>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              id="in_password"
              disabled
            />
          </div>
          <div className={styles.extra}>
            <div className={styles.remember}>
              <input type="checkbox" name="dont" disabled />
              <label for="dont">Remember me</label>
            </div>
            <div className={styles.new}>Forgot Password?</div>
          </div>
          <div className={styles.button_cover}>
            <button className={styles.main_but} disabled>
              Sign In
            </button>
          </div>
          <div className={styles.join}>
            Dont have an account? <a href="/signup">Join Free</a> Today
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
