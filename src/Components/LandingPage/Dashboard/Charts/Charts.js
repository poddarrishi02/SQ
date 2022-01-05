import React, { useState } from "react";
import styles from "./Charts.module.css";
import AllCharts from "./AllCharts";

function Charts(props) {
  const [query, setQuery] = useState(0);
  const [range, setRange] = useState(0);

  const line_hist_handler = (val) => {
    setQuery(val);
  };

  const rangeHandler = (val) => {
    setRange(val);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <div className={styles.title}>Quant Indices</div>
        <div className={styles.desc}>Startup Framework gives you complete</div>
      </div>

      <div className={styles.switch}>
        <button className={styles.switchs} onClick={() => line_hist_handler(0)}>
          Chart
        </button>
        <button className={styles.switchs} onClick={() => line_hist_handler(1)}>
          Histogram
        </button>
      </div>

      <div className={styles.chart}>
        <AllCharts query={query} range={range} menu={props.menu} />
      </div>

      <div className={styles.ranges}>
        <button className={styles.range} onClick={() => rangeHandler(0)} style={range==0?{backgroundColor: "#d9ddff", borderRadius: "5em", color: "#2637b8"}:null}>
          1D
        </button>
        <button className={styles.range} onClick={() => rangeHandler(1)} style={range==1?{backgroundColor: "#d9ddff", borderRadius: "5em", color: "#2637b8"}:null}>
          1W
        </button>
        <button className={styles.range} onClick={() => rangeHandler(2)} style={range==2?{backgroundColor: "#d9ddff", borderRadius: "5em", color: "#2637b8"}:null}>
          1M
        </button>
        <button className={styles.range} onClick={() => rangeHandler(3)} style={range==3?{backgroundColor: "#d9ddff", borderRadius: "5em", color: "#2637b8"}:null}>
          3M
        </button>
        <button className={styles.range} onClick={() => rangeHandler(4)} style={range==4?{backgroundColor: "#d9ddff", borderRadius: "5em", color: "#2637b8"}:null}>
          1Y
        </button>
        <button className={styles.range} onClick={() => rangeHandler(5)} style={range==5?{backgroundColor: "#d9ddff", borderRadius: "5em", color: "#2637b8"}:null}>
          3Y
        </button>
        <button className={styles.range} onClick={() => rangeHandler(6)} style={range==6?{backgroundColor: "#d9ddff", borderRadius: "5em", color: "#2637b8"}:null}>
          5Y
        </button>
      </div>
    </div>
  );
}

export default Charts;
