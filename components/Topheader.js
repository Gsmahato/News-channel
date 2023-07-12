"use client"
import Link from 'next/link'
import React, { useState } from 'react';
import styles from '../src/app/page.module.css'
import Image from 'next/image'
import logo from '../public/logonews.png'
import banner from '../public/banner.gif'
import {PiUserCircle } from "react-icons/pi";
import { RiMenuLine} from "react-icons/ri";
import SideMenu from "./SideMenu";


const Topheader = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleMenuClick = () => {
    setShowSideMenu(!showSideMenu);
  };

  const handleCloseMenu = () => {
    setShowSideMenu(false);
  };
  return (
    <>
        <div className={styles.topheader}>
            <div className={styles.container}>
            <div className={styles.login_account}>
                <i className={styles.activity_icon}>
                  <PiUserCircle />
                </i>
              </div>
                <div className={styles.logo}>
                    <Link href="/">
                    <Image src={logo} width={268} height={31} alt=''/>
                    </Link>
                    <div className={styles.currenttime}>6/24/2023</div>
                </div>
                <div className={styles.head_adv}>
                    <div className={styles.ad}>
                        <Image src={banner} width={700} height={70} alt=''/>
                    </div>
                </div>
              <div className={styles.nav_menu} onClick={handleMenuClick}>
                <i className={styles.activity_icon} >
                  <RiMenuLine />
                </i>
              </div>
              {showSideMenu && <SideMenu onClose={handleCloseMenu} />}
            </div>
        </div>

    </>
  )
}

export default Topheader