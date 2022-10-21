import React from 'react'
import styles from '../styles/dattiec.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const proucts = () => {
    const notify = () => toast.success('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>MENU NHÀ HÀNG SBT SaBay Thai 127 Văn Cao 2022</h1>
            <p className={styles.desc}>
                Chắc hẳn mọi người ai cũng từng ăn qua các món Thái rồi đúng k ạ? Nhưng mình vừa thưởng thức đồ ăn mà mình vừa hiểu về chúng thì sẽ rất tuyệt vời đấy ạ.
                Hãy cùng SaBay Thai Hà Nội cùng tìm hiểu nhé!
            </p>
            <div>
                <button onClick={notify}>Notify!</button>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>
        </div>
    )
}

export default proucts