import React from "react";
import styles from "../styles/newStyles.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.app_header}>
        <div className={styles.app_logo}>
          <div>Logo</div>
          <div className={styles.app_menu}>
            <div className={styles.menu_icon}>
              <i>
                <FiMenu />
              </i>
            </div>
          </div>
        </div>
        <div className={styles.app_header_content}>
          <div className={styles.app_header_left}>
            <div className={styles.search_wrapp}>
              <div className={styles.input_holder}>
                <input type="text" className={styles.search_input} />
              </div>
              <button className={styles.close_wrapp}>
                <i>
                  <AiOutlineClose />
                </i>
              </button>
            </div>
          </div>
          <div className={styles.app_header_right}></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
