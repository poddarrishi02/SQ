import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";

import styles from "./SignUp.module.css";
import { ReactComponent as Back } from "./../../assets/Illustration.svg";
import { ReactComponent as Logo } from "./../../assets/Logo.svg";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { AuthContext } from "../../store/auth-context";
import axios from "axios";
const clientId =
  "305778371008-irfmq4n8siojbbsif8haml7lcr1jcpsj.apps.googleusercontent.com";

function SignUp() {
  let navigate = useNavigate();
  const AuthCtx = useContext(AuthContext);

  const onLoginSuccess = async (res) => {
    console.log("Login Success:", res.profileObj);
    AuthCtx.login("dummyEmail", "dummyPassword");
    navigate("/main");
    // const link = "http://localhost:8000";
    // console.log(`${link}`);
    // await axios.post(`${link}/`, { res });
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
        <div style={{ margin: "1em 0" }}>
          Sign Up to explore a world of<br></br> quantitative investment
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.box}>
          <div className={styles.title}>Create Account</div>
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
            <div className={styles.input_head}>Full Name</div>
            <input
              className={styles.input}
              type="text"
              placeholder="Oliver Twist"
              disabled
            />
          </div>
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
          <div className={styles.input_cover}>
            <div className={styles.input_head}>Confirm Password</div>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              id="in_password"
              disabled
            />
          </div>
          <div className={styles.button_cover}>
            <button className={styles.main_but} disabled>
              Create Account
            </button>
          </div>
          <div className={styles.join}>
            Already have an account? <a href="/signin">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
