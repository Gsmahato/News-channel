"use client"
import React, { useState } from 'react';
import styles from "../src/app/page.module.css";
import Link from "next/link";
import SideMenu from "./SideMenu";
import { PiClockClockwiseFill, PiTrendUp, PiUserCircle } from "react-icons/pi";
import { RiMenuLine, RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleMenuClick = () => {
    setShowSideMenu(!showSideMenu);
  };

  const handleCloseMenu = () => {
    setShowSideMenu(false);
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.menu_container}>
            <ul className={styles.primary_menu}>
              <li className={styles.menu_item}>
                <Link href="/">होमपेज</Link>
              </li>
              <li className={styles.menu_item}>
                <Link href="/bijnesh">विजनेस</Link>
              </li>
              <li className={styles.menu_item}>जीवनशैली</li>
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
              <div className={styles.nav_menu} onClick={handleMenuClick}>
                <i className={styles.activity_icon}>
                  <RiMenuLine />
                </i>
              </div>
              {showSideMenu && <SideMenu onClose={handleCloseMenu} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
