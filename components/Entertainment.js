import React from "react";
import styles from "../src/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import ANSU from "../public/ANSU.jpg";
import digital from "../public/digital.jpg";
import prachar from "../public/prachar.gif";
import { MdArrowForwardIos } from "react-icons/md";

const Entertainment = () => {
  return (
    <section className={styles.feature_section}>
      <div className={styles.container}>
        <div className={styles.section_title}>
          <h2 className={styles.title_part}>
            मनोरञ्जन
            <ul className={styles.title_cat_menu_2}>
              <Link href="/">गशिप</Link>
              <Link href="/">फिचर</Link>
              <Link href="/">बलिउड / हलिउड</Link>
              <Link href="/">मनोरञ्जन भिडियो</Link>
              <Link href="/">ब्लोअप</Link>
            </ul>
            <Link href="/">
              <i className={styles.F_arrow}>
                <MdArrowForwardIos />
              </i>
            </Link>
          </h2>
        </div>
        <div className={styles.grid_12}>
          <div className={styles.merge_2}>
            <div className={styles.post_overlay}>
              <Link href="/">
                <Image src={digital} alt="" width={396} height={590} />
                <div className={styles.post_content_wrap}>
                  <h2 className={styles.news_title_txt}>
                    प्रबल गुरुङले पहिरन बिक्रीको केही हिस्सा नेपाली बालबालिकाको
                    शिक्षामा छुट्याउने प्रबल गुरुङले पहिरन बिक्रीको केही हिस्सा
                    नेपाली बालबालिकाको शिक्षामा छुट्याउने
                  </h2>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.merge_2}></div>
          <div className={styles.span_4}></div>
          <div className={styles.span_4}></div>
        </div>
        <div className={styles.image_container}>
          <Image src={digital} alt="" width={500} height={590} />
          <div className={styles.text_overlay}>
            <h2>Text on Top of Image</h2>
            <p>Some description or additional text.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entertainment;
