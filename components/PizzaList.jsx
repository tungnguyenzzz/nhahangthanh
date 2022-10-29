import { useState } from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
import { FacebookProvider, CustomChat } from 'react-facebook';
const PizzaList = ({ pizzaList }) => {
  const [query, setQuery] = useState("");
  const [selecteItem, setSelecteItem] = useState("");
  const selected = pizzaList
  const fix = selected.map((select) => (

    select.extraOptions[0]?.text ? select.extraOptions[0].text : ""
  ))

  var uniq = [...new Set(fix)];//loai bo phan tu trung nhau select

  const handleChange = (event) => {

    setSelecteItem(event.target.value)

  }
  const handleClick = () => {
    setSelecteItem("")
  }

  return (

    <div className={styles.container}>


      <h1 className={styles.title}>CÁC MÓN NỔI BẬT NHẤT TẠI SABAY</h1>
      <p className={styles.desc}>
        “Nhà hàng Sabay ngon, đẹp và trang trọng nhằm tạo ra không gian thưởng thức ẩm thực đỉnh cao, chính là mục tiêu mà Sabay chúng tôi thật sự cố gắng theo đuổi.
      </p>
      <p className={styles.desc1}>
        “Nhà hàng Sabay ngon, đẹp và trang trọng nhằm tạo ra không gian thưởng thức ẩm thực đỉnh cao, chính là mục tiêu mà Sabay chúng tôi thật sự cố gắng theo đuổi. Dẫu còn nhiều trăn trở và khó khăn, đội ngũ sáng lập của nhà hàng Sabay luôn lắng nghe và xem nguyện vọng của khách hàng lên hàng đầu. Bên cạnh đó, Sabay coi việc kết hợp tinh hoa ẩm thực từ các nguyên liệu của quê hương nhằm phục vụ cho du khách các món ngon đặc sản tuyệt vời nhất!
      </p>
      <input
        className={styles.search}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      <label className={styles.loc} htmlFor="">Chọn loại món</label>
      <select className={styles.select} onChange={handleChange}>
        {uniq.map((select) => (

          <option key={select} defaultValue="" value={select}>{select}</option>
        ))}


      </select>
      <button onClick={handleClick}>Tất cả các món</button>
      <div className={styles.wrapper}>
        {pizzaList.filter((abc) =>
          abc.extraOptions[0].text.toLowerCase().includes(selecteItem)
        ).filter((asd) =>
          asd.title.toLowerCase().includes(query)
        ).map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
