import React from "react";
import styles from "../src/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import ANSU from "../public/ANSU.jpg";
import digital from "../public/digital.jpg";
import prachar from "../public/prachar.gif";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const Khelkud = () => {
  return (
    <section className={styles.Entertainment_section}>
      <div className={styles.E_container}>
        <div className={styles.E_section_title}>
          <h2 className={styles.E_title_part}>
            मनोरञ्जन
            <ul className={styles.E_title_cat_menu_2}>
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
        <ul className={styles.E_title_cat_menu_3}>
              <Link href="/">गशिप</Link>
              <Link href="/">फिचर</Link>
              <Link href="/">बलिउड / हलिउड</Link>
              <Link href="/">मनोरञ्जन भिडियो</Link>
              <Link href="/">ब्लोअप</Link>
            </ul>
        <div className={styles.Enter_grid_12}>
          <div className={styles.merge_2}>
            <div className={styles.Enter_spot_news}>
              <Link href="/">
                <Image
                  className={styles.M_image}
                  src={ANSU}
                  alt=""
                  width={700}
                  height={600}
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
          <div className={styles.merge_2}>
            <div className={styles.Enter_spot_news}>
              <Link href="/">
                <Image
                  className={styles.M_image}
                  src={ANSU}
                  alt=""
                  width={700}
                  height={600}
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
          <div className={styles.span_4}>
            <div className={styles.Enter_spot_news}>
              <Link href="/">
                <Image
                  className={styles.M_image}
                  src={ANSU}
                  alt=""
                  width={500}
                  height={400}
                />
                <div className={styles.post_content}>
                  <h2 className={styles.E_title_text}>
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
          <div className={styles.span_4}>
            <div className={styles.Enter_spot_news}>
              <Link href="/">
                <Image
                  className={styles.M_image}
                  src={ANSU}
                  alt=""
                  width={500}
                  height={400}
                />
                <div className={styles.post_content}>
                  <h2 className={styles.E_title_text}>
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
        </div>
      </div>
    </section>
  );
};

export default Khelkud;
