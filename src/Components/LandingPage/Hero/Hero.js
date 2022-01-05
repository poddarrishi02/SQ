import React, { useState, useEffect } from "react";
import { ReactComponent as Main } from "./../../../assets/Hero.svg";
import { ReactComponent as Arrow } from "./../../../assets/mainDownArrow.svg";
import styles from "./Hero.module.css";
import data from "./HeroData.json";

function Hero() {
  const [showData, setShowData] = useState();
  useEffect(() => {
    // const randomIntFromInterval = (min, max) => {
    // min and max included
    let rand = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    const finalData = data.data.at(rand);
    setShowData(finalData);
    // };
  }, []);
  return (
    <div className={styles.box}>
      <div>
        <Main className={styles.svg} />
      </div>
      <div className={styles.title}>{showData?.heading}</div>
      <div className={styles.desc}>
        {showData?.lineOne}
        {showData?.lineOne.length > 0 ? <br /> : null}
        {showData?.lineTwo}
      </div>

      <div className={styles.button_cover}>
        <button className={styles.main_but}>Start Investing</button>
        <div className={styles.down}>
          <a
            href="./main#dashboard"
            onClick={(e) => {
              let hero = document.getElementById("dashboard");
              e.preventDefault(); // Stop Page Reloading
              hero && hero.scrollIntoView();
            }}
          >
            <Arrow />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
