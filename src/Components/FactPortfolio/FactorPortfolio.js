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
            <h4 className={styles.stepsheading}>4 easy steps to calculate your portfolio
                <section className={styles.info}>i</section>
            </h4>
        </div>
    )
}

export default FactorPortfolio
