import { React, useState } from 'react';
import styles from './optisector.module.css'
function OptiSector() {
    const negsList = ["Abortion", "Animal Testing", "Animal Testing", "Contraceptives", "Controversial Weapons", "Thermal Coal", "Genetic Modification", "Military", "Pesticides", "Small Arms", "Human Stem Cell & Fetal Tissue ", "Tobacco"]
    const classList = ["Energy Efficiency", "Financial Inclusion", "Green Buildings", "Green Transportation", "Health", "Renewable Energy", "Sustainable Agriculture and Food", "Water", "Education"]
    var arr1 = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ]
    const [classBool, setclassBool] = useState(arr1);
    var arr2 = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ]
    const [negsBool, setnegsBool] = useState(arr2);
    const companies = [
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            esg: "UnitedHealth"
        },
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            esg: "UnitedHealth"
        },
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            esg: "UnitedHealth"
        },
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            esg: "UnitedHealth"
        },
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            esg: "UnitedHealth"
        },
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            esg: "UnitedHealth"
        },
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            esg: "UnitedHealth"
        },
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            esg: "UnitedHealth"
        },
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            esg: "UnitedHealth"
        },
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            esg: "UnitedHealth"
        }
    ]
    return (
        <div className={styles.outermost}>
            <div className={styles.outer}>
                <h6 className={styles.navheading}>Home &gt; Optimizer</h6>
                <h1 className={styles.heading}>Product Involvement and Sustainability Screens</h1>
                <h5 className={styles.subheading}>Startup Framework gives you complete freedom over your creative process</h5>
                <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ipsum quis fringilla velit convallis amet, amet amet id. Iaculis magna lacus facilisis maecenas hendrerit commodo rhoncus mattis. Elementum facilisis eget id pharetra placerat viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ipsum quis fringilla velit convallis amet, amet amet id. Iaculis magna lacus facilisis maecenas hendrerit commodo rhoncus mattis. Elementum facilisis eget id pharetra placerat viverra.
                </div>
                <div className={styles.screens}>
                    <div className={styles.screen}>
                        <div classname={styles.headerrow} style={{ marginTop: "45px", marginBottom: "20px" }}><div className={styles.heading2}>Select Negative Screens- Exclude</div></div>
                        <div className={styles.checkboxes}>
                            {negsList.map((x, id) => {
                                return (
                                    <div className={styles.neg}>
                                        <input
                                            className={styles.checkbox}
                                            type="checkbox"
                                            name="neg"
                                            id={id + "neg"}
                                            checked={negsBool[id]}
                                            onClick={() => {
                                                const arr = [];
                                                negsList.map((y, id2) => {
                                                    id2 === id
                                                        ? arr.push(!negsBool[id2])
                                                        : arr.push(negsBool[id2]);
                                                });
                                                setnegsBool(arr);
                                            }}
                                        />
                                        <label for={id + "neg"} className={styles.label}>{x}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles.screen}>
                        <section style={{ marginTop: "45px", marginBottom: "20px", display: "flex", justifyContent: "space-between" }}>
                            <div className={styles.heading2}>Select Best-in-Class Screens- Include</div>
                            <div className={styles.clearbtn}
                                onClick={() => { setnegsBool(arr1); setclassBool(arr2); }}>Clear All
                            </div>
                        </section>
                        <div className={styles.checkboxes} style={{ height: "220px" }}>
                            {classList.map((x, id) => {
                                return (
                                    <div className={styles.neg}>
                                        <input
                                            className={styles.checkbox}
                                            type="checkbox"
                                            name="class"
                                            id={id + "class"}
                                            checked={classBool[id]}
                                            onClick={() => {
                                                const arr = [];
                                                classList.map((y, id2) => {
                                                    id2 === id
                                                        ? arr.push(!classBool[id2])
                                                        : arr.push(classBool[id2]);
                                                });
                                                setclassBool(arr);
                                            }}
                                        />
                                        <label for={id + "class"} className={styles.label}>{x}</label>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={styles.runbtn}><div className={styles.runtxt}>Run</div></div>
                    </div>
                </div>
                <table className={styles.table}>
                    <thead style={{ height: "49px" }}>
                        <th></th>
                        <th><div>Ticker</div></th>
                        <th><div>Sector</div></th>
                        <th><div>ESG Risk</div></th>
                    </thead>
                    <tbody>
                        {companies.map((x, id) => {
                            return (<tr>
                                <td style={{ paddingLeft: "31.65px", width: "343px" }}>{x.name}</td>
                                <td>{x.ticker}</td>
                                <td>{x.sector}</td>
                                <td>{x.esg}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div >
        </div >
    );
}

export default OptiSector;