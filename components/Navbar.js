"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import styles from "../src/app/page.module.css";
import Link from "next/link";
import SideMenu from "./SideMenu";
import { PiClockClockwiseFill, PiTrendUp, PiUserCircle } from "react-icons/pi";
import { RiMenuLine, RiMenu2Line } from "react-icons/ri";

async function getCategory() {
  const res = await fetch(
    "https://www.bimaabazar.com/newsportal/categories/?cache_bust=12345"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Navbar(){
  const [showSideMenu, setShowSideMenu] = useState(false);
  // const [otherMenuItems, setOtherMenuItems] = useState([]);
  const router = useRouter()

  // useEffect(() => {
  //   const fetchMenuItems = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://www.bimaabazar.com/newsportal/categories/"
  //       );
  //       const data = await response.json();
  //       setOtherMenuItems(data);
  //     } catch (error) {
  //       console.error("Error fetching menu items:", error);
  //     }
  //   };

  //   fetchMenuItems();
  // }, []);

  const handleMenuClick = () => {
    setShowSideMenu(!showSideMenu);
  };

  const handleCloseMenu = () => {
    setShowSideMenu(false);
  };

  const handleMenuItemClick = (categoryID) => {
    router.push(`/category/${categoryID}`);
  };
  const cat = await getCategory();

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.menu_container}>
            <ul className={styles.primary_menu}>
              <li className={styles.menu_item}>
                <Link href="/">होमपेज</Link>
              </li>
              {cat.map((item) => (
                <li
                  key={item.id}
                  className={styles.menu_item}
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            {/* <Link className={styles.english_edition} href="/">
              English
            </Link> */}
            {/* <Link
              className={styles.election_edition}
              href="https://election.onlinekhabar.com/"
            >
              चुनाव २०७९
            </Link> */}
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

