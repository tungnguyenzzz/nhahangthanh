import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Bạn sẽ trả sau khi giao hàng. Làm ơn gọi điện cho chúng tôi.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Họ Tên</label>
          <input
            placeholder="Nguyễn Văn A"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Số điện thoại</label>
          <input
            type="text"
            placeholder="+84123456789"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Địa chỉ</label>
          <textarea
            rows={5}
            placeholder="Số nhà phường xã"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Gọi món
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
