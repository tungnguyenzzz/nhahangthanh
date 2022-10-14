import { useState } from "react";
import { useEffect } from "react";
import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  const [checkBtn,setCheckBtn] = useState(false)
  useEffect(() => {
    function getCookie(name) {
      var dc = document.cookie;
      var prefix = name + "=";
      var begin = dc.indexOf("; " + prefix);
      if (begin == -1) {
          begin = dc.indexOf(prefix);
          if (begin != 0) return null;
      }
      else
      {
          begin += 2;
          var end = document.cookie.indexOf(";", begin);
          if (end == -1) {
          end = dc.length;
          }
      }
      // because unescape has been deprecated, replaced with decodeURI
      //return unescape(dc.substring(begin + prefix.length, end));
      return decodeURI(dc.substring(begin + prefix.length, end));
  } 
  
  function doSomething() {
      var myCookie = getCookie("token");
      if (myCookie == null) {
        // do cookie doesn't exist stuff;
        
    }
    else {
        // do cookie exists stuff
        setCheckBtn(!checkBtn)
    }
  }
  doSomething()
  }, [])

if (!checkBtn) {
    return <></>;
} else {
    // If user is logged out
    return (  
      <div onClick={() => setClose(false)} className={styles.mainAddButton}>
        Add New Pizza
      </div>    
    );
}
  
};

export default AddButton;
