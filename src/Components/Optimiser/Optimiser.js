import { React, useState, useRef } from "react";
import styles from "./optimiser.module.css";
import data from "../../assets/response.json";
// import DatePicker from '@mui/lab/DatePicker';
import { RiCloseLine } from "react-icons/ri";
import "react-icons/";
import Graphs from "./Graphs";
import OptiSlider from "./OptiSlider";
import FileUpload from '../FileUpload/Upload';

function Optimiser() {
  const [activeIndex1, setactiveIndex1] = useState(0);
  const sectorList = ["All", "Agriculture", "Chemical", "Commerce", "Construction", "Education", "Financial", "Automobiles", "Aviation", "Biotechnology", "Construction", "Defence", "Defence", "Retail", "Non-durable", "Textiles", "Real Estate", "Engineering"]
  var arrF = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
  const [sectorBool, setsectorBool] = useState(arrF);
  const [activeIndex2, setactiveIndex2] = useState(0);
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const indices1 = ["CSV", "Sector"];
  const indices2 = ["Maximize Returns", "Minimize Risk", "Maximize Momentum"];
  return (
    <div className={styles.outer}>
      <h6 className={styles.navheading}>Home &gt; Optimizer</h6>
      <h1 className={styles.heading}>Optimizer</h1>
      <h5 className={styles.subheading}>
        Startup Framework gives you complete freedom over your creative process
      </h5>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.leftmenu}>
            <div className={styles.bullet}>
              <div className={styles.num}>1</div>
            </div>
          </div>
          <div className={styles.content} style={{ marginTop: "-11px" }}>
            <div className={styles.headrow} style={{ alignItems: "center" }}>
              <div className={styles.stepheading}>Stock Universe</div>
              {indices1.map((x, id) => {
                return (
                  <div style={{ display: "flex" }}>
                    <input
                      type="radio"
                      name="index1"
                      id={`stock${id}`}
                      style={{ display: "none" }}
                    />
                    <label
                      for={`stock${id}`}
                      className={styles.index}
                      style={
                        activeIndex1 === id
                          ? { background: "#D9DDFF", color: "#2637B8" }
                          : null
                      }
                      onClick={() => setactiveIndex1(id)}
                    >
                      {x}
                    </label>
                  </div>
                );
              })}
            </div>
            {activeIndex1 == 0 && <div className={styles.upload}>
              <label for="files" className={styles.uploadbtn}><span className={styles.btntxt}>Upload files...</span></label>
              <input id="files" style={{ visibility: "hidden", width: "0", height: "0" }} type="file" />
              <div className={styles.btnsidetxt}>Drop files here (Limit 200MB per file CSV)</div>
            </div>}
            {activeIndex1 == 1 && 
            <div style={{marginTop:"22.5px"}}>
              <div className={styles.checkboxes}>
                {sectorList.map((x, id) => {
                  return (
                    <div className={styles.neg}>
                      <input
                        className={styles.checkbox}
                        type="checkbox"
                        name="neg"
                        id={id + "neg"}
                        checked={sectorBool[id]}
                        onClick={() => {
                          const arr = [];
                          sectorList.map((y, id2) => {
                            id2 === id
                              ? arr.push(!sectorBool[id2])
                              : arr.push(sectorBool[id2]);
                          });
                          setsectorBool(arr);
                          if (id == 0) {
                            const temp = []
                            for (let i = 0; i < sectorList.length; i++) { temp.push(true) }
                            setsectorBool(temp)
                          }
                        }}
                      />
                      <label for={id + "neg"} className={styles.label}>{x}</label>
                    </div>
                  )
                })}
                <div className={styles.clearbtn} onClick={()=>{setsectorBool(arrF)}}>Clear All</div>
              </div>
            </div>}
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.leftmenu}>
            <div className={styles.bullet}>
              <div className={styles.num}>2</div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.headrow}>
              <div className={styles.stepheading}>
                Choose investment objectives{" "}
              </div>
              <div className={styles.bracketed}>&nbsp;&nbsp;(select)</div>
            </div>
            <div style={{ display: "flex", marginLeft: "-2vw" }}>
              {indices2.map((x, id) => {
                return (
                  <div style={{ display: "flex" }}>
                    <input
                      type="radio"
                      name="index2"
                      id={`choose${id}`}
                      style={{ display: "none" }}
                    />
                    <label
                      for={`choose${id}`}
                      className={styles.index}
                      style={
                        activeIndex2 == id
                          ? { background: "#D9DDFF", color: "#2637B8" }
                          : null
                      }
                      onClick={() => setactiveIndex2(id)}
                    >
                      {x}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.leftmenu}>
            <div className={styles.bullet}>
              <div className={styles.num}>3</div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.headrow}>
              <div className={styles.stepheading}>Choose investment constraint</div>
            </div>
            <div className={styles.inputs}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <input type="checkbox" id="minmax1" name="minmax1"></input>
                    <label for="minmax1">Min/Max stock weight</label>
                  </div>
                  <div className={styles.resetbtn}>Reset All</div>
                </div>
                <div className={styles.inputdiv}>
                  <div style={{ marginRight: "18px" }}>
                    <div style={{ fontSize: "12px" }}>Min. stock weight</div>
                    <input
                      type="number"
                      step="0.1"
                      className={styles.decinp}
                    ></input>
                  </div>
                  <div style={{ fontSize: "12px" }}>
                    <div>Max. stock weight</div>
                    <input
                      type="number"
                      step="0.1"
                      className={styles.decinp}
                    ></input>
                  </div>
                </div>
              </div>
              <div className={styles.input2}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <input type="checkbox" id="minmax2" name="minmax2"></input>
                    <label for="minmax2">Min/Max stock weight</label>
                  </div>
                  <div className={styles.resetbtn}>Reset All</div>
                </div>
                <div className={styles.inputdiv}>
                  <div style={{ marginRight: "18px" }}>
                    <div style={{ fontSize: "12px" }}>Min. stock weight</div>
                    <input
                      type="number"
                      step="0.1"
                      className={styles.decinp}
                    ></input>
                  </div>
                  <div style={{ fontSize: "12px" }}>
                    <div>Max. stock weight</div>
                    <input
                      type="number"
                      step="0.1"
                      className={styles.decinp}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.leftmenu} style={{ backgroundColor: "white" }}>
            <div className={styles.bullet}>
              <div className={styles.num}>4</div>
            </div>
          </div>
          <div className={styles.content} style={{ paddingBottom: "0px" }}>
            <div className={styles.headrow}>
              <div className={styles.stepheading}>Choose factor constraint</div>
              <div className={styles.bracketed}>
                &nbsp;&nbsp;(seperated by comma)
              </div>
            </div>

            <OptiSlider />
          </div>
        </div>
      </div>
      <Graphs />
    </div >
  );
}

export default Optimiser;
