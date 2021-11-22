import React from 'react'

import styles from "./Main.module.css"

const Main = (props) => {
    return (
        <div>
            <div className={styles.main}>
                {props.children}
            </div>
            <div style={{}}>
                {props.adv}
            </div>
        </div>
    )
}

export default Main
