import React from "react";
import styles from "../styles/newStyles.module.css";
import Link from "next/link";
import {
  RiDashboardLine,
  RiAdminFill,
  RiGridLine,
  RiNewspaperLine,
} from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu, FiUserPlus } from "react-icons/fi";
import { BiRightArrow, BiDownArrow } from "react-icons/bi";


const AdminPage = () => {
  
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

export default AdminPage;
