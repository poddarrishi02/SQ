import React, { useContext } from "react";
import {GoogleLogout} from 'react-google-login';
import { useNavigate } from "react-router-dom";

import styles from "./Navbar.module.css";
import { ReactComponent as Logo } from "./../../../assets/Logo2.svg";
import { ReactComponent as DownArrow } from "./../../../assets/DownArrow.svg";
import { ReactComponent as Profile } from "./../../../assets/Profile.svg";
import {AuthContext} from '../../../store/auth-context';

function Navbar() {
  const AuthCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = () =>{
    AuthCtx.logout();
    navigate("/signin");
  }
  return (
    <div className={styles.box}>
      <div className={styles.brand}>
        <Logo />
      </div>
      <div className={styles.links}>
        <div className={styles.link}>
          <a>Home</a>
        </div>
        <div className={styles.link}>
          <div class={styles.dropdown}>
            <div class={styles.dropbtn}>
              Features <DownArrow />
            </div>
            <div class={styles.dropdown_content}>
              <a href="#">Factor Calcuation</a>
              <a href="#">Hawkeye Analysis</a>
              <a href="#">Portfolio Construction Tool</a>
              <a href="#">Backtesting Engine</a>
              <a href="#">ESG Green Screen</a>
              <a href="#">Insider Trading</a>
            </div>
          </div>
        </div>
        <div className={styles.link}>
          <a>Pricing</a>
        </div>
        <div className={styles.link}>
          <a href="facebook.com">Contact us</a>
        </div>
        <div className={styles.link}>
          {/* <a href="facebook.com"> */}
            

          {AuthCtx.isLoggedIn ? <GoogleLogout
              clientId="305778371008-irfmq4n8siojbbsif8haml7lcr1jcpsj.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={logoutHandler}
              render={renderProps => (
                <a href="#" onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</a>
              )}
            ></GoogleLogout> : null}



            {/* <img
              style={{ borderRadius: "50%" }}
              src="https://source.unsplash.com/random/20x20"
              alt=""
            /> */}
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
