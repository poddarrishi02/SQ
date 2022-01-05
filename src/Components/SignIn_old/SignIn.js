import React from "react";
import styles from "./SignIn.module.css";

function SignIn() {
  const pass = () => {
    const password = document.getElementById("in_password");
    const eye = document.getElementsByClassName("bi-eye-slash")[0];
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    eye.classList.toggle("bi-eye");
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.title}>Welcome</div>
          <div className={styles.desc}>
            Welcome to the world of Quantative Investment
          </div>
          <div className={styles.form}>
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
                id="in_password"
              />
              <i class="bi bi-eye-slash" onClick={pass}></i>
            </div>
            <div className={styles.button_cover}>
              <button className={styles.main_but}>Sign In</button>
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

export default SignIn;
