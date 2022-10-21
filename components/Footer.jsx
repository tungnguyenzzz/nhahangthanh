import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            SABAY THAI - KHÔNG GIAN THÁI, TINH HOA ẨM THỰC THÁI
          </h2>
          <iframe className={styles.facebook} src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsabaythaihanoi&tabs=timeline&width=300&height=300&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=445580737497709" width="300" height="300" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>TÌM CÁC NHÀ HÀNG CỦA CHÚNG TÔI</h1>
          <p className={styles.text}>
            127 Văn Cao, Quận Ba Đình,
            <br /> Hanoi, 100000
            <br /> Vietnam
          </p>
          <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29790.979480638474!2d105.78036427910156!3d21.0377896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab33a184fd39%3A0x2c184323d8f5971e!2sSabay%20Thai!5e0!3m2!1svi!2s!4v1665727431095!5m2!1svi!2s" width="300" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>GIỜ LÀM VIỆC</h1>
          <p className={styles.text}>
            Thứ Hai ĐẾN Chủ Nhật
            <br /> 9:00 – 23:00
          </p>
          <div className={styles.logofooter}>
            <Image src="/img/logo1.png" alt="" width="300px" height="130px" />
          </div>
          {/* <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
