import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Link href="/" passHref>
            <Image src="/img/telephone.png" alt="" width="32" height="32" />
          </Link>
        </div>

        <div className={styles.texts}>
          <div className={styles.text}>ĐẶT NGAY!</div>
          <div className={styles.text}>𝟬𝟯𝟯.𝟰𝟵𝟴.𝟲𝟱𝟭𝟴</div>
        </div>

      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <Image src="/img/logo1.png" alt="" width="160px" height="69px" />
          </Link>
          <Link href="/" passHref>
            <li className={styles.listItem}>TRANG CHỦ</li>
          </Link>

          <Link href="/menus" passHref>
            <li className={styles.listItem}>SET MENU</li>
          </Link>
          <Link href="/dattiec" passHref>
            <li className={styles.listItem}>ĐẶT TIỆC</li>
          </Link>
          <Link href="/events" passHref>
            <li className={styles.listItem}>SỰ KIỆN</li>
          </Link>
          <Link href="/blogs" passHref>
            <li className={styles.listItem}>TIN TỨC</li>
          </Link>
          <Link href="/contacts" passHref>
            <li className={styles.listItem}>LIÊN HỆ</li>
          </Link>
        </ul>
      </div>

      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
      <label className={styles.bars_btn} htmlFor="nav-mobile-input">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
      </label>

      <input hidden className={styles.nav_input} type="checkbox" name="" id="nav-mobile-input"></input>
      <label className={styles.overlay} htmlFor="nav-mobile-input"></label>

      <div className={styles.item_mobile}>
        <label htmlFor="nav-mobile-input" className={styles.mobile_colse}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg>
        </label>
        <ul className={styles.list_mobile}>


          <Link href="/" passHref>
            <li className={styles.listItem_mobile}>TRANG CHỦ</li>
          </Link>

          <Link href="/menus" passHref>
            <li className={styles.listItem_mobile}>SET MENU</li>
          </Link>
          <Link href="/dattiec" passHref>
            <li className={styles.listItem_mobile}>ĐẶT TIỆC</li>
          </Link>
          <Link href="/events" passHref>
            <li className={styles.listItem_mobile}>SỰ KIỆN</li>
          </Link>
          <Link href="/blogs" passHref>
            <li className={styles.listItem_mobile}>TIN TỨC</li>
          </Link>
          <Link href="/contacts" passHref>
            <li className={styles.listItem_mobile}>LIÊN HỆ</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
