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
                <img className={styles.img_item} src='https://res.cloudinary.com/dh0l2njij/image/upload/v1667060052/set%20menu/c2fac0621c33da6d8322_jsie2e.jpg'></img>
            </div>
            <div className={styles.img}>
                <img className={styles.img_item} src='https://res.cloudinary.com/dh0l2njij/image/upload/v1667060052/set%20menu/e30d6bbfb7ee71b028ff_zh75vb.jpg'></img>
            </div>

            <div className={styles.img}>
                <img className={styles.img_item} src='https://res.cloudinary.com/dh0l2njij/image/upload/v1667060052/set%20menu/a93467f9bba87df624b9_u4cxtk.jpg'></img>
            </div>
            <div className={styles.img}>
                <img className={styles.img_item} src='https://res.cloudinary.com/dh0l2njij/image/upload/v1667060052/set%20menu/5aa7a5757924bf7ae635_tamy0r.jpg'></img>
            </div>
            <div className={styles.img}>
                <img className={styles.img_item} src='https://res.cloudinary.com/dh0l2njij/image/upload/v1667060053/set%20menu/6eecdf560307c5599c16_xbycpi.jpg'></img>
            </div>
            <div className={styles.img}>
                <img className={styles.img_item} src='https://res.cloudinary.com/dh0l2njij/image/upload/v1667060052/set%20menu/0af4ad507101b75fee10_fneoas.jpg'></img>
            </div>
            <div className={styles.img}>
                <img className={styles.img_item} src='https://res.cloudinary.com/dh0l2njij/image/upload/v1667060053/set%20menu/fbdfbb016750a10ef841_r3hww0.jpg'></img>
            </div>


        </div>
    )
}

export default menus