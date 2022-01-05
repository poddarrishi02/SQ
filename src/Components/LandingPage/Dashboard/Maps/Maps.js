import React, { useState } from "react";
import { VectorMap } from "react-jvectormap";
import "./Maps.css";
import styles from "./Maps.module.css";
import data from "./../../../../assets/All_Data.json";

const p = data["World Indices"]["1d"];
const p1 = data["World Indices"]["1w"];
const p2 = data["World Indices"]["1m"];
const p3 = data["World Indices"]["3m"];
const p4 = data["World Indices"]["1y"];
const p5 = data["World Indices"]["3y"];
const p6 = data["World Indices"]["5y"];
const mapData = {};
const mapData1 = {};
const mapData2 = {};
const mapData3 = {};
const mapData4 = {};
const mapData5 = {};
const mapData6 = {};

const { getCode, getData, getName } = require("country-list");

const handleClick = (e, countryCode) => {
  console.log(mapData);
};

console.log(getData());

const Maps = () => {
  for (var key in p) {
    if (p.hasOwnProperty(key)) {
      for (var index in p[key]) {
        if (p[key].hasOwnProperty(index)) {
          if (getCode(key)) mapData[getCode(key)] = p[key][index];
          else console.log(key);
        }
      }
    }
  }
  for (var key in p1) {
    if (p1.hasOwnProperty(key)) {
      for (var index in p1[key]) {
        if (p1[key].hasOwnProperty(index)) {
          if (getCode(key)) mapData1[getCode(key)] = p1[key][index];
        }
      }
    }
  }
  for (var key in p2) {
    if (p2.hasOwnProperty(key)) {
      for (var index in p2[key]) {
        if (p2[key].hasOwnProperty(index)) {
          if (getCode(key)) mapData[getCode(key)] = p2[key][index];
        }
      }
    }
  }
  for (var key in p3) {
    if (p3.hasOwnProperty(key)) {
      for (var index in p3[key]) {
        if (p3[key].hasOwnProperty(index)) {
          if (getCode(key)) mapData[getCode(key)] = p3[key][index];
        }
      }
    }
  }
  for (var key in p4) {
    if (p4.hasOwnProperty(key)) {
      for (var index in p4[key]) {
        if (p4[key].hasOwnProperty(index)) {
          if (getCode(key)) mapData[getCode(key)] = p4[key][index];
        }
      }
    }
  }
  for (var key in p5) {
    if (p5.hasOwnProperty(key)) {
      for (var index in p5[key]) {
        if (p5[key].hasOwnProperty(index)) {
          if (getCode(key)) mapData[getCode(key)] = p5[key][index];
        }
      }
    }
  }
  for (var key in p6) {
    if (p6.hasOwnProperty(key)) {
      for (var index in p6[key]) {
        if (p6[key].hasOwnProperty(index)) {
          if (getCode(key)) mapData[getCode(key)] = p6[key][index];
        }
      }
    }
  }
  const [range, setRange] = useState(0);
  const rangeHandler = (val) => {
    setRange(val);
  };

  return (
    <div className="map-cover">
      <div style={{ display: range === 0 ? "block" : "none" }}>
        <VectorMap
          map={"world_mill"}
          backgroundColor="#F0F4FA" //change it to ocean blue: #0077be
          zoomOnScroll={false}
          containerStyle={{
            marginTop: "2vh",
            width: "100%",
            height: "50%",
          }}
          onRegionClick={handleClick} //gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "#2938bc", //color for the clicked country
            },
          }}
          regionsSelectable={false}
          series={{
            regions: [
              {
                values: mapData, //this is your data
                scale: ["#020303", "#B21E35", "#A11D33", "#25A244", "#4AD66D"], //your color game's here
                normalizeFunction: "linear",
              },
            ],
          }}
        />
      </div>
      <div style={{ display: range === 1 ? "block" : "none" }}>
        <VectorMap
          map={"world_mill"}
          backgroundColor="#F0F4FA" //change it to ocean blue: #0077be
          zoomOnScroll={false}
          containerStyle={{
            marginTop: "10vh",
            width: "100%",
            height: "50%",
          }}
          onRegionClick={handleClick} //gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "#2938bc", //color for the clicked country
            },
          }}
          regionsSelectable={false}
          series={{
            regions: [
              {
                values: mapData1, //this is your data
                scale: ["#020303", "#B21E35", "#A11D33", "#25A244", "#4AD66D"], //your color game's here
                normalizeFunction: "linear",
              },
            ],
          }}
        />
      </div>
      <div style={{ display: range === 2 ? "block" : "none" }}>
        <VectorMap
          map={"world_mill"}
          backgroundColor="#F0F4FA" //change it to ocean blue: #0077be
          zoomOnScroll={false}
          containerStyle={{
            marginTop: "10vh",
            width: "100%",
            height: "50%",
          }}
          onRegionClick={handleClick} //gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "#2938bc", //color for the clicked country
            },
          }}
          regionsSelectable={false}
          series={{
            regions: [
              {
                values: mapData2, //this is your data
                scale: ["#020303", "#B21E35", "#A11D33", "#25A244", "#4AD66D"], //your color game's here
                normalizeFunction: "linear",
              },
            ],
          }}
        />
      </div>
      <div style={{ display: range === 3 ? "block" : "none" }}>
        <VectorMap
          map={"world_mill"}
          backgroundColor="#F0F4FA" //change it to ocean blue: #0077be
          zoomOnScroll={false}
          containerStyle={{
            marginTop: "10vh",
            width: "100%",
            height: "50%",
          }}
          onRegionClick={handleClick} //gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "#2938bc", //color for the clicked country
            },
          }}
          regionsSelectable={false}
          series={{
            regions: [
              {
                values: mapData3, //this is your data
                scale: ["#020303", "#B21E35", "#A11D33", "#25A244", "#4AD66D"], //your color game's here
                normalizeFunction: "linear",
              },
            ],
          }}
        />
      </div>
      <div style={{ display: range === 4 ? "block" : "none" }}>
        <VectorMap
          map={"world_mill"}
          backgroundColor="#F0F4FA" //change it to ocean blue: #0077be
          zoomOnScroll={false}
          containerStyle={{
            marginTop: "10vh",
            width: "100%",
            height: "50%",
          }}
          onRegionClick={handleClick} //gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "#2938bc", //color for the clicked country
            },
          }}
          regionsSelectable={false}
          series={{
            regions: [
              {
                values: mapData4, //this is your data
                scale: ["#020303", "#B21E35", "#A11D33", "#25A244", "#4AD66D"], //your color game's here
                normalizeFunction: "linear",
              },
            ],
          }}
        />
      </div>
      <div style={{ display: range === 5 ? "block" : "none" }}>
        <VectorMap
          map={"world_mill"}
          backgroundColor="#F0F4FA" //change it to ocean blue: #0077be
          zoomOnScroll={false}
          containerStyle={{
            marginTop: "10vh",
            width: "100%",
            height: "50%",
          }}
          onRegionClick={handleClick} //gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "#2938bc", //color for the clicked country
            },
          }}
          regionsSelectable={false}
          series={{
            regions: [
              {
                values: mapData5, //this is your data
                scale: ["#020303", "#B21E35", "#A11D33", "#25A244", "#4AD66D"], //your color game's here
                normalizeFunction: "linear",
              },
            ],
          }}
        />
      </div>
      <div style={{ display: range === 6 ? "block" : "none" }}>
        <VectorMap
          map={"world_mill"}
          backgroundColor="#F0F4FA" //change it to ocean blue: #0077be
          zoomOnScroll={false}
          containerStyle={{
            marginTop: "10vh",
            width: "100%",
            height: "50%",
          }}
          onRegionClick={handleClick} //gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "#2938bc", //color for the clicked country
            },
          }}
          regionsSelectable={false}
          series={{
            regions: [
              {
                values: mapData6, //this is your data
                scale: ["#020303", "#B21E35", "#A11D33", "#25A244", "#4AD66D"], //your color game's here
                normalizeFunction: "linear",
              },
            ],
          }}
        />
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
};
export default Maps;
