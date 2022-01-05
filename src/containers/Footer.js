import React from 'react'
import styles from './footer.module.css'
import { ReactComponent as Logo } from "../assets/Logo2.svg";
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
    const d = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={styles.row1}>
                <div className={styles.col1}>
                    <div className={styles.logodiv}>
                        <Logo className={styles.logo}/>
                    </div>
                    <div className={styles.content}>
                        At SimplyQuant we leverage the power of technology and research to make quantitative investing simple, intuitive and accessible for you.
                    </div>
                </div>
                <div className={styles.col2}>
                    <div className={styles.menulists}>
                        <div className={styles.menulist1}>
                            <span className={styles.menuitem}>About</span>
                            <span className={styles.menuitem}>Features</span>
                            <span className={styles.menuitem}>Blog</span>
                        </div>
                        <div className={styles.menulist2}>
                            <span className={styles.menuitem}>Pricing</span>
                            <span className={styles.menuitem}>Contact Us</span>
                        </div>
                    </div>
                    <div className={styles.follow}>
                        <div className={styles.icondiv}>
                            <span className={styles.iconhead}><b>Follow Us</b></span>
                            <span className={styles.icons}>
                                <FaLinkedinIn className={styles.icon} />
                                <FaTwitter className={styles.icon} />
                                <FaInstagram className={styles.icon} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.row2}>
                <div className={styles.copyright}>
                    Copyright © {d}. SimplyQuant. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
