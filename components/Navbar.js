import React from "react";
import styles from "../src/app/page.module.css";
import Link from "next/link";
import { PiClockClockwiseFill, PiTrendUp, PiUserCircle } from "react-icons/pi";
import { RiMenuLine, RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.menu_container}>
            <ul className={styles.primary_menu}>
              <li className={styles.menu_item}>होमपेज</li>
              <li className={styles.menu_item}>विजनेस</li>
              <li className={styles.menu_item}>जीवनशैली</li>
              <li className={styles.menu_item}>विजनेस</li>
              <li className={styles.menu_item}>मनोरन्जन</li>
              <li className={styles.menu_item}>खेलकुद</li>
              <li className={styles.menu_item}>विजनेस</li>
              <li className={styles.menu_item}>प्रवास</li>
              <li className={styles.menu_item}>अन्य</li>
            </ul>
            <Link className={styles.english_edition} href="/">
              English
            </Link>
            <Link
              className={styles.election_edition}
              href="https://election.onlinekhabar.com/"
            >
              चुनाव २०७९
            </Link>
            <div className={styles.user_activity}>
              <div className={styles.latest_news}>
                <i className={styles.activity_icon}>
                  <PiClockClockwiseFill />
                </i>
              </div>
              <div className={styles.trending_news}>
                <i className={styles.activity_icon}>
                  <PiTrendUp />
                </i>
              </div>
              <div className={styles.login_account}>
                <i className={styles.activity_icon}>
                  <PiUserCircle />
                </i>
              </div>
              <div className={styles.nav_menu}>
                <i className={styles.activity_icon}>
                  <RiMenuLine />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
