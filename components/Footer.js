import React from "react";
import styles from "../src/app/page.module.css";
import Link from "next/link";
import logo from "../public/logonews.png";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className={styles.site_footer}>
        <div className={styles.footer_container}>
          <div className={styles.flx_wrap}>
            <div>
              <h4>समाचार</h4>
              <ul>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>विजनेस</h4>
              <ul>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>मनोरञ्जन</h4>
              <ul>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>विशेष श्रृंखला</h4>
              <ul>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>ताजाखबर</h4>
              <ul>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.footer_info}>
        <div className={styles.footer_container}>
          <div>
            <div className={styles.logo_wrap}>
              <Link href="/">
                <Image src={logo} width={268} height={31} alt="" />
              </Link>
            </div>
          </div>
          <div className={styles.footer_editor_info}>
            <h5>
              <span>अध्यक्ष तथा प्रबन्ध निर्देशक:</span>धर्मराज भुसाल
            </h5>
          </div>
          <div className={styles.footer_editor_info}>
            <h5>
              <span>प्रधान सम्पादकः</span>धर्मराज भुसाल
            </h5>
          </div>
          <div className={styles.footer_editor_info}>
            <h5>
              <span>सूचना विभाग दर्ता नं.</span>धर्मराज भुसाल
            </h5>
          </div>
          <div className={styles.footer_contact_info}>
            <h5>
              <span>+977-980980980</span>
            </h5>
            <h5>
              <span>email@gmail.com</span>
            </h5>
          </div>
          <div className={styles.footer_contact_info}>
            <div className={styles.social_brands}>
              <Link href="/">
                <i>
                  <FaFacebook />
                </i>
              </Link>
              <Link href="/">
                <i>
                  <FaTwitter />
                </i>
              </Link>
              <Link href="/">
                <i>
                  <FaYoutube />
                </i>
              </Link>
            </div>
            <span className={styles.copyright_text}>
              © २०२३-२०२३ Tazakhabar.com सर्वाधिकार सुरक्षित
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
