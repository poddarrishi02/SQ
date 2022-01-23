import { React, useState } from 'react';
import styles from './graphs.module.css'
function Graphs() {
    const menu = ["Top 10 holdings", "Factor Analysis", "Stock Sector ", "Returns"]
    const [activeMenu, setactiveMenu] = useState(0);
    return (
        <div>
            <div className={styles.menu}>
                {menu.map((x, id) => {
                    return (
                        <div className={id == activeMenu ? styles.menuactive : styles.menuitem}
                            onClick={() => { setactiveMenu(id) }}>{x}</div>
                    )
                })}
            </div>
            {activeMenu == 0 &&
                <div>
                a
                </div>
            }
            {activeMenu == 1 &&
                <div>
                b
                </div>
            }
            {activeMenu == 2 &&
                <div>
                c
                </div>
            }
            {activeMenu == 3 &&
                <div>
                d
                </div>
            }
        </div>
    )
}

export default Graphs;
