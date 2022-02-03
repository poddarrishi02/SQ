import { React, useState, useRef } from 'react'
import styles from './optimiser.module.css'
import data from "../../assets/response.json"
// import DatePicker from '@mui/lab/DatePicker';
import { RiCloseLine } from 'react-icons/ri'
import 'react-icons/'
import Graphs from './Graphs'
import OptiSlider from './OptiSlider'
function Optimiser() {
    const [activeIndex1, setactiveIndex1] = useState(0)
    const [activeIndex2, setactiveIndex2] = useState(0)
    const ref = useRef(null)
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    }
    const indices1 = ["CSV", "Sector"]
    const indices2 = ["Maximize Returns", "Minimize Risk", "Maximize Momentum"]
    return (
        <div className={styles.outer}>
            <h6 className={styles.navheading}>Home &gt; Optimizer</h6>
            <h1 className={styles.heading}>Optimizer</h1>
            <h5 className={styles.subheading}>Startup Framework gives you complete freedom over your creative process</h5>
            <div className={styles.steps}>
                <div className={styles.step}>
                    <div className={styles.leftmenu}>
                        <div className={styles.bullet}>
                            <div className={styles.num}>1</div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.headrow}>
                            <div className={styles.stepheading}>Stock Universe</div>
                            <>
                                {indices1.map((x, id) => {
                                    return (
                                        <div style={{ "display": "flex" }}>
                                            <input type="radio" name="index1" id={`stock${id}`} style={{ display: "none" }} />
                                            <label for={`stock${id}`} className={styles.index}
                                                style={activeIndex1 == id ? { background: "#D9DDFF", color: "#2637B8" } : null}
                                                onClick={() => setactiveIndex1(id)}>
                                                {x}
                                            </label>
                                        </div>
                                    )
                                })}
                            </>
                        </div>
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
                            <div className={styles.stepheading}>Choose investment objectives   </div>
                            <div className={styles.bracketed}>&nbsp;&nbsp;(select)</div>
                        </div>
                        <div style={{ "display": "flex", "marginLeft": "-2vw" }}>
                            {indices2.map((x, id) => {
                                return (
                                    <div style={{ "display": "flex" }}>
                                        <input type="radio" name="index2" id={`choose${id}`} style={{ display: "none" }} />
                                        <label for={`choose${id}`} className={styles.index}
                                            style={activeIndex2 == id ? { background: "#D9DDFF", color: "#2637B8" } : null}
                                            onClick={() => setactiveIndex2(id)}>
                                            {x}
                                        </label>
                                    </div>
                                )
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
                                    <input type="number" step="0.1" className={styles.decinp}></input>
                                </div>
                                <div style={{ fontSize: "12px" }}>
                                    <div>Max. stock weight</div>
                                    <input type="number" step="0.1" className={styles.decinp}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.step}>
                    <div className={styles.leftmenu} style={{ backgroundColor: 'white' }}>
                        <div className={styles.bullet}>
                            <div className={styles.num}>4</div>
                        </div>
                    </div>
                    <div className={styles.content} style={{ paddingBottom: "0px" }}>
                        <div className={styles.headrow}>
                            <div className={styles.stepheading}>Choose factor constraint</div>
                            <div className={styles.bracketed}>&nbsp;&nbsp;(seperated by comma)</div>
                        </div>

                        <OptiSlider />
                    </div>
                </div>
            </div>
            <Graphs />
        </div >
    )
}

export default Optimiser