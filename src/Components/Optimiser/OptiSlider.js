import { React, useState } from 'react'
import ReactSlider from 'react-slider'
import styles from './slider.module.css'
import './sliderr.css'
function OptiSlider() {
    const [vals, setvals] = useState([0, 0, 0, 0, 0, 0, 0]);
    const constraints1 = ["Momentum", "Value", "Quality", "Liquidity"]
    const constraints2 = ["Volatility", "Growth", "Size"]
    const cnstrvals = ["Off", "Very High", "High", "Neutral", "Low", "Very Low"]
    return (
        <div className={styles.outer}>
            <div className={styles.frow}>
                <div className={styles.fcol1}>
                    <div className={styles.fhead}>
                        {cnstrvals.map(z => {
                            return (
                                <div className={styles.fh}>{z}</div>
                            );
                        })}
                    </div>
                    {constraints1.map((x, id) => {
                        return (
                            <div className={styles.cnstr}>
                                <div className={styles.slhead}>{x}</div>
                                <ReactSlider
                                    step={1}
                                    min={0}
                                    max={5}
                                    value={vals[id]}
                                    onChange={(e) => {
                                        var arr2 = [];
                                        vals.map((y, id2) => {
                                            if (id2 == id)
                                                arr2.push(e);
                                            else
                                                arr2.push(y);
                                        })
                                        setvals(arr2);
                                        console.log(arr2)
                                    }}
                                    className={styles.horizontalslider}
                                    thumbClassName={"examplethumb" + id}
                                    trackClassName={styles.exampletrack}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className={styles.fcol2}>
                    <div className={styles.fhead}>
                        {cnstrvals.map(z => {
                            return (
                                <div className={styles.fh}>{z}</div>
                            );
                        })}
                    </div>
                    {constraints2.map((x, id) => {
                        return (
                            <div className={styles.cnstr}>
                                <div className={styles.slhead}>{x}</div>
                                <ReactSlider
                                    step={1}
                                    min={0}
                                    max={5}
                                    value={vals[id + 4]}
                                    onChange={(e) => {
                                        var arr2 = [];
                                        vals.map((y, id2) => {
                                            if (id2 == id + 4)
                                                arr2.push(e);
                                            else
                                                arr2.push(y);
                                        })
                                        setvals(arr2);
                                        console.log(arr2)
                                    }}
                                    className={styles.horizontalslider}
                                    thumbClassName={"examplethumb" + (id + 4)}
                                    trackClassName={styles.exampletrack}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <button className={styles.runbtn}>
                <div className={styles.runtext}>Run</div>
            </button>
        </div>
    );
}

export default OptiSlider;
// `${styles.examplethumb} ${styles.examplethumb2}`