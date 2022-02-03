import { React, useState } from 'react';
import styles from './insidertrading.module.css'
function InsiderTrading() {
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
        <div className={styles.outer}>
            <h6 className={styles.navheading}>Features &gt; Insider Trading</h6>
            <h1 className={styles.heading}>Insider Trading</h1>
            <h5 className={styles.subheading}>Startup Framework gives you complete freedom over your creative process</h5>
            <div>
                <div className={styles.lookback}>Enter lookback period in days</div>
                <div className={styles.inputs}>
                    <div className={styles.days}>
                        <div className={styles.stephead}>
                            <div className={styles.enterdays}>enter no. of days</div>
                            <div className={styles.resetbtn}>Reset All</div>
                        </div>
                        <div className={styles.inputdiv}>
                            <input type="number" step="1" className={styles.decinp}></input>
                        </div>
                    </div>
                    <div className={styles.sort}>
                        <div className={styles.sorthead}>Sort by</div>
                        <div>
                            <select name="sorter" id="sorter"className={styles.selectinp}>
                                <option value="" disabled selected hidden>Pick one</option>
                                <option value="alpha">Alphabetic Order</option>
                                <option value="lowhigh">Lowest to Highest</option>
                            </select>
                        </div>
                    </div>
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
    );
}

export default InsiderTrading;