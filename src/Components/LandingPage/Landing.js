import React from "react";
import Hero from "./Hero/Hero";
import styles from "./Landing.module.css";
import Dashboard from "./Dashboard/Dashboard";

function Landing() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    // const reloadCount = sessionStorage.getItem('reloadCount');
    // if(reloadCount < 2) {
    //   sessionStorage.setItem('reloadCount', String(reloadCount + 1));
    //   window.location.reload();
    // } else {
    //   sessionStorage.removeItem('reloadCount');
    // }
  }, [])
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.first}>
          <Hero />
        </div>
        <div className={styles.second} id="dashboard">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default Landing;
