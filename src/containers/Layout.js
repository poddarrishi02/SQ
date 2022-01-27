import React from "react";
import Navbar from "../Components/LandingPage/Navbar/Navbar";
import Footer from "./Footer";
import classes from "./layout.module.css";
import { AuthContext } from "../store/auth-context";
import ProtectedRoute from "../store/ProtectedRoute";
export default function Layout(props) {
  const AuthCtx = React.useContext(AuthContext);
  return (
    <div>
      <div className={classes.header}>{AuthCtx.isLoggedIn ? <Navbar /> : null}</div>
        <div style={{minHeight: "fit-content"}}>{props.children}</div>
      <div>
        {AuthCtx.isLoggedIn && (
          <div className={classes.footer}>
            {/* {AuthCtx.isLoggedIn ? <Footer /> : null} */}
            {AuthCtx.isLoggedIn ? null : null}
          </div>
        )}
      </div>
    </div>
  );
}
