import React from 'react'
import Image from "next/image";

import styles from "../styles/Phone.module.css"
const Phone = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.textCall}>033.498.6518</h3>
            {/* <a className={styles.btnCall} href="tel:0334986518"><img className={styles.imgCall} src="https://library.kissclipart.com/20180829/gwq/kissclipart-mobile-phone-icon-green-clipart-mobile-phones-comp-704b91b3d8e87f1a.png"></img></a> */}
            <a className={styles.btnCall} href="tel:0334986518">
                <Image src="/img/phone1.png" alt="" width="60" height="60" />
            </a>

        </div>
    )
}

export default Phone