import React from "react";
import styles from "../src/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { PiClockClockwiseFill } from "react-icons/pi";
import ANSU from "../public/ANSU.jpg";
import RightBanner from "../public/rightbanner.gif";

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
              <div className={styles.span_5}>
                <div className={styles.post_2tr}>
                  <Link className={styles.post_con} href="/">
                    <Image src={ANSU} alt="" width={134} height={82} />
                    <div className={styles.M_content_wrap}>
                      <h2 className={styles.title_text_M}>
                        ललिता निवास प्रकरणमा तीन जनालाई पक्राउ गर्नुको आधार
                      </h2>
                      <div className={styles.title_info_m}>
                        <div className={styles.post_hour_m}>
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
                <div className={styles.post_2tr}>
                  <Link className={styles.post_con} href="/">
                    <Image src={ANSU} alt="" width={134} height={82} />
                    <div className={styles.M_content_wrap}>
                      <h2 className={styles.title_text_M}>
                        ललिता निवास प्रकरणमा तीन जनालाई पक्राउ गर्नुको आधार
                      </h2>
                      <div className={styles.title_info_m}>
                        <div className={styles.post_hour_m}>
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
                <div className={styles.post_2tr}>
                  <Link className={styles.post_con} href="/">
                    <Image src={ANSU} alt="" width={134} height={82} />
                    <div className={styles.M_content_wrap}>
                      <h2 className={styles.title_text_M}>
                        ललिता निवास प्रकरणमा तीन जनालाई पक्राउ गर्नुको आधार
                      </h2>
                      <div className={styles.title_info_m}>
                        <div className={styles.post_hour_m}>
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
                <div className={styles.post_2tr}>
                  <Link className={styles.post_con} href="/">
                    <Image src={ANSU} alt="" width={134} height={82} />
                    <div className={styles.M_content_wrap}>
                      <h2 className={styles.title_text_M}>
                        ललिता निवास प्रकरणमा तीन जनालाई पक्राउ गर्नुको आधार
                      </h2>
                      <div className={styles.title_info_m}>
                        <div className={styles.post_hour_m}>
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
                  <i className={styles.post_hour_icon_m}>
                    <PiClockClockwiseFill />
                  </i>{" "}
                  २४ घन्टाका ताजा अपडेट
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.col_right}>
            <div className={styles.side_ad}>
              <div
                className={styles.desktop_mukhya_ad}
                data-alias="home-mukhya-right"
                data-device-type="desktop"
              >
                <div className={styles.each_ad}>
                  <Link href="/">
                    <Image src={RightBanner} width={300} height={200} alt=""/>
                  </Link>
                </div>
                <div className={styles.each_ad}>
                  <Link href="/">
                    <Image src={RightBanner} width={300} height={200} alt=""/>
                  </Link>
                </div>
                <div className={styles.each_ad}>
                  <Link href="/">
                    <Image src={RightBanner} width={300} height={200} alt=""/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mukhya;
