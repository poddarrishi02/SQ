import React from 'react'
import styles from './factorportfolio.module.css'
import { FcInfo } from 'react-icons/fc'
function FactorPortfolio() {
    return (
        <div className={styles.outer}>
            <h6 className={styles.navheading}>Features &gt; Factor Portfolio</h6>
            <h1 className={styles.heading}>Factor Portfolio</h1>
            <h5 className={styles.subheading}>Startup Framework gives you complete freedom over your creative process</h5>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus leo orci integer sollicitudin suscipit nunc, arcu pellentesque orci. Elit augue magna sed vitae, amet eros. Faucibus nibh velit bibendum lectus nisi, amet aliquet.
                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus leo orci integer sollicitudin suscipit nunc, arcu pellentesque orci. Elit a</p>
            <h4 className={styles.stepsheader}>4 easy steps to calculate your portfolio
                <section className={styles.info}>i</section>
            </h4>
            <div className={styles.steps}>
                <div className={styles.step}>
                    <div className={styles.leftmenu}>
                        <div className={styles.bullet}>
                            <div className={styles.num}>1</div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.headrow}>
                            <div className={styles.stepheading}>Select Date </div>
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
                            <div className={styles.stepheading}>Universe</div>
                            <div className={styles.bracketed}>&nbsp;&nbsp;(any one)</div>
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
                            <div className={styles.stepheading}>Factor</div>
                            <div className={styles.bracketed}>&nbsp;&nbsp;(can be more than one)</div>
                        </div>
                    </div>
                </div>
                <div className={styles.step}>
                    <div className={styles.leftmenu} style={{backgroundColor: 'white'}}>
                        <div className={styles.bullet}>
                            <div className={styles.num}>4</div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.headrow}>
                            <div className={styles.stepheading}>Enter NSE symbols to compare</div>
                            <div className={styles.bracketed}>&nbsp;&nbsp;(seperated by comma)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FactorPortfolio
