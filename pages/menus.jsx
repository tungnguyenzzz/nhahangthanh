import React from 'react'
import styles from "../styles/menus.module.css";
const menus = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>MENU NHÀ HÀNG SBT SaBay Thai 127 Văn Cao 2022</h1>
            <p className={styles.desc}>
                Chắc hẳn mọi người ai cũng từng ăn qua các món Thái rồi đúng k ạ? Nhưng mình vừa thưởng thức đồ ăn mà mình vừa hiểu về chúng thì sẽ rất tuyệt vời đấy ạ.
                Hãy cùng SaBay Thai Hà Nội cùng tìm hiểu nhé!
            </p>
            <div className={styles.img}>
                <img className={styles.img_item} src='https://res.cloudinary.com/dh0l2njij/image/upload/v1665676922/set%20menu/combo_1_lcmjxg.jpg'></img>
            </div>
            <div className={styles.img}>
                <img className={styles.img_item} src='https://res.cloudinary.com/dh0l2njij/image/upload/v1665676921/set%20menu/combo_2_dswrgk.jpg'></img>
            </div>
            <div className={styles.img}>
                <img className={styles.img_item} src='https://res.cloudinary.com/dh0l2njij/image/upload/v1665676922/set%20menu/combo_3_dwbnib.jpg'></img>
            </div>
            <div className={styles.img}>
                <img className={styles.img_item} src='https://res.cloudinary.com/dh0l2njij/image/upload/v1665676921/set%20menu/menu_1_wosqud.jpg'></img>
            </div>
        </div>
    )
}

export default menus