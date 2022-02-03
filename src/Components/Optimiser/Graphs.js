import { React, useState } from 'react';

import styles from './graphs.module.css'

import PieChart from "../../Components/Charts/PieChart"
import HorizontalChart from "../../Components/Charts/HorizontalChart"

function Graphs() {
    const menu = ["Top 10 holdings", "Factor Analysis", "Stock Sector ", "Returns"]
    const [activeMenu, setactiveMenu] = useState(0);
    const midcap = [
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            price: "96000"
        },
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            price: "96000"
        },
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            price: "96000"
        },
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            price: "96000"
        }
    ]
    const smallcap = [
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            price: "96000"
        },
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            price: "96000"
        },
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            price: "96000"
        }
    ]
    const largecap = [
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            price: "96000"
        },
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            price: "96000"
        },
        {
            name: "Allahabad Bank",
            ticker: "NYSE:TTM",
            sector: "UnitedHealth",
            price: "96000"
        }
    ]
    const stocks = [
        {
            name: "Financial",
            port: "96.000",
            sap: "99.00"
        },
        {
            name: "Financial",
            port: "96.000",
            sap: "99.00"
        },
        {
            name: "Financial",
            port: "96.000",
            sap: "99.00"
        },
        {
            name: "Financial",
            port: "96.000",
            sap: "99.00"
        },
        {
            name: "Financial",
            port: "96.000",
            sap: "99.00"
        },
        {
            name: "Financial",
            port: "96.000",
            sap: "99.00"
        },
        {
            name: "Financial",
            port: "96.000",
            sap: "99.00"
        },
        {
            name: "Financial",
            port: "96.000",
            sap: "99.00"
        },
        {
            name: "Financial",
            port: "96.000",
            sap: "99.00"
        }
    ]
    return (
        <div className={styles.graphouter}>
            <div className={styles.menu}>
                {menu.map((x, id) => {
                    return (
                        <div className={id == activeMenu ? styles.menuactive : styles.menuitem}
                            onClick={() => { setactiveMenu(id) }}>{x}</div>
                    )
                })}
            </div>
            {activeMenu == 0 &&
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width:"100%"}}>
                        <table className={styles.atable}>
                            <thead>
                                <th></th>
                                <th style={{ textAlign: "left" }}>Ticker</th>
                                <th style={{ textAlign: "left" }}>Sector</th>
                                <th>Price</th>
                            </thead>
                            <tbody>
                                {/* First Table */}
                                {/* Midcap, green color */}
                                {midcap.map((x, id) => {
                                    return (<tr className={styles.midrow}>
                                        <td style={{ paddingLeft: "53px", width: "270px" }}>{x.name}</td>
                                        <td style={{ width: "192px" }}>{x.ticker}</td>
                                        <td>{x.sector}</td>
                                        <td style={{ textAlign: "center" }}>{x.price}</td>
                                    </tr>)
                                })}
                                {/* Small cap blue color */}
                                {smallcap.map((x, id) => {
                                    return (<tr className={styles.smallrow}>
                                        <td style={{ paddingLeft: "53px", width: "270px" }}>{x.name}</td>
                                        <td style={{ width: "192px" }}>{x.ticker}</td>
                                        <td>{x.sector}</td>
                                        <td style={{ textAlign: "center" }}>{x.price}</td>
                                    </tr>)
                                })}
                                {/* LargeCap, Yellow */}
                                {largecap.map((x, id) => {
                                    return (<tr className={styles.largerow}>
                                        <td style={{ paddingLeft: "53px", width: "270px" }}>{x.name}</td>
                                        <td style={{ width: "192px" }}>{x.ticker}</td>
                                        <td>{x.sector}</td>
                                        <td style={{ textAlign: "center" }}>{x.price}</td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                        <div className={styles.chartContainer}><PieChart/></div>
                </div>
            }
            {activeMenu === 1 && <div>
                <HorizontalChart />
                </div>}
            {activeMenu === 2 && <div>
                <div>
                    <table className={styles.btable}>
                        <thead>
                            <th></th>
                            <th className={styles.col2head}><div>Portfolio</div><div>(% of stocks)</div></th>
                            <th className={styles.col3head}><div>SAP 500</div><div>(%)</div></th>
                        </thead>
                        <tbody>
                            {stocks.map((x, id) => {
                                return (<tr>
                                    <td style={{ paddingLeft: "31.65px", width: "343px" }}>{x.name}</td>
                                    <td className={styles.col2}>{x.port}</td>
                                    <td className={styles.col3}>{x.sap}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                    <div className={styles.chartContainer}><PieChart /></div>

                </div>
            </div>}
            {activeMenu == 3 &&
                <div style={{ margin: "auto", width:"fit-content" }}>
                    <table className={styles.btable} style={{ width: "768.5px" }}>
                        <thead style={{ height: "49px" }}>
                            <th></th>
                            <th className={styles.col2head}><div>Portfolio</div></th>
                            <th className={styles.col3head}><div>SAP 500</div></th>
                        </thead>
                        <tbody>
                            {stocks.map((x, id) => {
                                return (<tr>
                                    <td style={{ paddingLeft: "31.65px", width: "343px" }}>{x.name}</td>
                                    <td className={styles.col2}>{x.port}</td>
                                    <td className={styles.col3}>{x.sap}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>}
        </div>
    )
}

export default Graphs;
