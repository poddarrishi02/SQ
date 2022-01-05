import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import Maps from "./Maps/Maps";
import Charts from "./Charts/Charts";

import { ReactComponent as Port } from "./port.svg";
import { ReactComponent as Global } from "./global.svg";
import { ReactComponent as Quant } from "./quant.svg";
import { ReactComponent as R1 } from "./rectangles/rect.svg";
import { ReactComponent as R2 } from "./rectangles/rect2.svg";
import { ReactComponent as R3 } from "./rectangles/rect3.svg";
import { ReactComponent as R4 } from "./rectangles/rect4.svg";
import { ReactComponent as R5 } from "./rectangles/rect5.svg";
import { ReactComponent as R6 } from "./rectangles/rect6.svg";
import { ReactComponent as R7 } from "./rectangles/rect7.svg";
import { ReactComponent as R8 } from "./rectangles/rect8.svg";

function Dashboard() {
  const [menu, setMenu] = useState(0);
  const [nav, setNav] = useState(0);

  const menuHandler = (val) => {
    setMenu(val);
  };

  const navHandler = (val) => {
    setNav(val);
  };

  return (
    <div >
      <div className={styles.navbar}>
        <button className={styles.nav_item} autoFocus onClick={() => navHandler(0)} style={nav==0?{fontWeight:"600", border:"2px solid #2637b8", color:"#2637b8"}:null}>
          <Global className={styles.nav_svg} />
          Global Performance
        </button>
        <button className={styles.nav_item} onClick={() => navHandler(1)} style={nav==1?{fontWeight:"600", border:"2px solid #2637b8", color:"#2637b8"}:null}>
          <Quant className={styles.nav_svg} />
          Quant Indices
        </button>
        <button className={styles.nav_item} onClick={() => navHandler(2)} style={nav==2?{fontWeight:"600", border:"2px solid #2637b8", color:"#2637b8"}:null}>
          <Port className={styles.nav_svg} />
          Portfolio Analysis
        </button>
      </div>

      <div className={styles.main}>
        <div
          className={styles.side_nav}
          style={{
            display: nav === 1 ? "inline" : "none",
          }}
        >
          <button
            className={styles.side_nav_item}
            onClick={() => menuHandler(0)}
          >
            <R1 className={styles.rect} />
            Overview
          </button>
          <button
            className={styles.side_nav_item}
            onClick={() => menuHandler(1)}
          >
            <R2 className={styles.rect} />
            Momentum
          </button>
          <button
            className={styles.side_nav_item}
            onClick={() => menuHandler(2)}
          >
            <R3 className={styles.rect} />
            Value
          </button>
          <button
            className={styles.side_nav_item}
            onClick={() => menuHandler(3)}
          >
            <R4 className={styles.rect} />
            Quality
          </button>
          <button
            className={styles.side_nav_item}
            onClick={() => menuHandler(4)}
          >
            <R5 className={styles.rect} />
            Liquidity
          </button>
          <button
            className={styles.side_nav_item}
            onClick={() => menuHandler(5)}
          >
            <R6 className={styles.rect} />
            Volatility
          </button>
          <button
            className={styles.side_nav_item}
            onClick={() => menuHandler(6)}
          >
            <R7 className={styles.rect} />
            Growth
          </button>
          <button
            className={styles.side_nav_item}
            onClick={() => menuHandler(7)}
          >
            <R8 className={styles.rect} />
            Size
          </button>
        </div>
        <div
          className={styles.data}
          style={{
            display: nav === 1 ? "inline" : "none",
          }}
        >
          <Charts menu={menu} setMenu={setMenu} />
        </div>
      </div>
      <div
        className={styles.data_bar}
        style={{
          display: nav === 0 ? "block" : "none",
        }}
      >
        <div className={styles.headings}>
          <div className={styles.title}>Global Performance</div>
          <div className={styles.desc}>
            Startup Framework gives you complete
          </div>
        </div>
        <Maps />
      </div>
    </div>
  );
}

export default Dashboard;
