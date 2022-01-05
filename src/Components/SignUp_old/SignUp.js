import React from "react";
import styles from "./SignUp.module.css";

function SignUp() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.title}>Welcome</div>
          <div className={styles.desc}>
            Sign up to explore a world of quantitative investment
          </div>
          <div className={styles.form}>
            <div className={styles.input_cover}>
              <input
                className={styles.input}
                type="text"
                placeholder="FullName"
              />
            </div>
            <div className={styles.input_cover}>
              <input
                className={styles.input}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className={styles.input_cover}>
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className={styles.input_cover}>
              <input
                className={styles.input}
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className={styles.button_cover}>
              <button className={styles.main_but}>Sign Up</button>
            </div>
            <div className={styles.or}>OR</div>
            <div className={styles.button_cover}>
              <button className={styles.google}>Sign In with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
