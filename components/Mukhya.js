import React from "react";
import styles from "../src/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import {FaRegClock } from 'react-icons/fa'
import {PiClockClockwiseFill} from 'react-icons/pi'
import ANSU from '../public/ANSU.jpg'

const Mukhya = () => {
  return (
    <>
      <section className={styles.mukhya_section}>
        <div className={styles.mukhya_container}>
          <div className={styles.col_left}>
            <div className={styles.mukhya_news_grid}>
              <div className={styles.span_7}>
                <div className={styles.spot_news}>
                  <Link href="/">
                    <Image src={ANSU} alt="" width={505} height={580} />
                    <div className={styles.post_content}>
                      <h2 className={styles.title_text}>
                        साफ च्याम्पियनसिप २०२३ : अपेक्षा अनुसारकै नतिजा साफ
                        च्याम्पियनसिप २०२३
                      </h2>
                      <div className={styles.title_info}>
                        <div className={styles.post_hour}>
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
              <div className={styles.span_1}>
                <div className={styles.post_ltr}>
                <Link href="/">
                    <Image src="" alt="" width={100} height={100} />
                    <div className={styles.post_content}>
                      <h2 className={styles.title_text}>
                        साफ च्याम्पियनसिप २०२३ : अपेक्षा अनुसारकै नतिजा साफ
                        च्याम्पियनसिप २०२३
                      </h2>
                      <div className={styles.title_info}>
                        <div className={styles.post_hour}>
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
              <div className={styles.span_5}>
                <Link href="/" className={styles.quick_update_24}>
                    <i><PiClockClockwiseFill/></i> २४ घन्टाका ताजा अपडेट
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.col_right}></div>
        </div>
      </section>
    </>
  );
};

export default Mukhya;
