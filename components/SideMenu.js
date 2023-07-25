import React from "react";
import styles from "../src/app/page.module.css";
import Link from "next/link";

export default async function SideMenu ({ onClose }) {
    const handleCloseMenu = () => {
        onClose();
      };
  return (
    <>
      <div className={styles.side_menu}>
        <span className={styles.close_menu} onClick={handleCloseMenu}>+</span>
        <div className={styles.side_menu_item}>
          <ul>
            <li className={styles.menu_item}>
              <Link href="/">होमपेज</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">विजनेस</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">जीवनशैली</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">विजनेस</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">मनोरन्जन</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">मनोरन्जन</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">खेलकुद</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">प्रवास</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">प्रवास</Link>
            </li>
          </ul>
            <Link className={styles.english_edition_menu} href="/">
              English
            </Link>
            <Link
              className={styles.election_edition_menu}
              href="https://election.onlinekhabar.com/"
            >
              चुनाव २०७९
            </Link>
        </div>
      </div>
    </>
  );
};

