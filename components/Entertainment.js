import React from "react";
import styles from "../src/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import ANSU from "../public/ANSU.jpg";
import digital from "../public/digital.jpg";
import prachar from "../public/prachar.gif";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const Entertainment = () => {
  return (
    <section className={styles.feature_section}>
      <div className={styles.E_container}>
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
                <div className={styles.spot_news}>
                  <Link href="/">
                    <Image
                      className={styles.M_image}
                      src={ANSU}
                      alt=""
                      width={700}
                      height={580}
                    />
                    <div className={styles.post_content}>
                      <h2 className={styles.M_title_text}>
                        साफ च्याम्पियनसिप २०२३ : अपेक्षा अनुसारकै नतिजा साफ
                        च्याम्पियनसिप २०२३
                      </h2>
                      <div className={styles.title_in}>
                        <div className={styles.M_post_hour}>
                          <i>
                            <FaRegClock />
                          </i>
                          <span>५ मिनेट अगाडि</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
          <div className={styles.merge_2}></div>
          <div className={styles.span_4}></div>
          <div className={styles.span_4}></div>
        </div>
      </div>
    </section>
  );
};

export default Entertainment;
