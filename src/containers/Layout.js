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
      <div className={classes.container}>
        <div className={classes.header}>
          {/* <ProtectedRoute> */}
            <Navbar />
          {/* </ProtectedRoute> */}
        </div>
        {props.children}
      </div>
      {AuthCtx.isLoggedIn && (
        <div className={classes.footer}>
          {/* <ProtectedRoute> */}
            <Footer />
          {/* </ProtectedRoute> */}
        </div>
      )}
    </div>
  );
}
