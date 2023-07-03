import React from "react";
import styles from "../src/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import ANSU from "../public/ANSU.jpg";
import digital from "../public/digital.jpg"
import prachar from "../public/prachar.gif";
import { MdArrowForwardIos } from "react-icons/md";

const PradeshSamachar = () => {
  return (
    <section className={styles.bijnesh_samachar}>
      <div className={styles.news_container}>
        <div className={styles.col_left}>
          <div className={styles.section_title}>
            <h2 className={styles.title_part}>
            प्रदेश समाचार
              <ul className={styles.title_pradesh_num}>
                <Link href="/">१
                </Link>
                <Link href="/">२
                </Link>
                <Link href="/">३
                </Link>
                <Link href="/">४
                </Link>
                <Link href="/">५
                </Link>
                <Link href="/">६
                </Link>
                <Link href="/">७
                </Link>
              </ul>
              <Link href="/">
                <i className={styles.F_arrow}>
                  <MdArrowForwardIos />
                </i>
              </Link>
            </h2>
          </div>
          <div className={styles.grid_12}>
            <div className={styles.span_12}>
              <div className={styles.samachar_spot_news}>
                <div className={styles.post_img}>
                  <Link href="/">
                    <Image src={ANSU} alt="" width={580} height={508} />
                  </Link>
                </div>
                <div className={styles.post_title_3}>
                  <Link href="/">
                    <h4>
                      ललिता निवास प्रकरणमा तीन जनालाई पक्राउ गर्नुको आधार र कारण
                      पेश गर्न सर्वोच्चको आदेश
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={styles.home_samachar}
              data-device-type="desktop"
            ></div>
           <div className={styles.span_4}>
                <div className={styles.pradesh_post_news}>
                    <Link  className={styles.pradesh_post_news} href="/">
                        <Image src={ANSU} alt="" width={276} height={165}/>
                        <div className={styles.post_content_wrap}>
                            <h2>दाङमा मोटरसाइकल दुर्घटनामा स्वास्थ्यकर्मीको मृत्यु</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.span_4}>
                <div className={styles.pradesh_post_news}>
                    <Link  className={styles.pradesh_post_news} href="/">
                        <Image src={ANSU} alt="" width={276} height={165}/>
                        <div className={styles.post_content_wrap}>
                            <h2>दाङमा मोटरसाइकल दुर्घटनामा स्वास्थ्यकर्मीको मृत्यु</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.span_4}>
                <div className={styles.pradesh_post_news}>
                    <Link  className={styles.pradesh_post_news} href="/">
                        <Image src={ANSU} alt="" width={276} height={165}/>
                        <div className={styles.post_content_wrap}>
                            <h2>दाङमा मोटरसाइकल दुर्घटनामा स्वास्थ्यकर्मीको मृत्यु</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.span_4}>
                <div className={styles.pradesh_post_news}>
                    <Link  className={styles.pradesh_post_news} href="/">
                        <Image src={ANSU} alt="" width={276} height={165}/>
                        <div className={styles.post_content_wrap}>
                            <h2>दाङमा मोटरसाइकल दुर्घटनामा स्वास्थ्यकर्मीको मृत्यु</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.span_4}>
                <div className={styles.pradesh_post_news}>
                    <Link  className={styles.pradesh_post_news} href="/">
                        <Image src={digital} alt="" width={276} height={165}/>
                        <div className={styles.post_content_wrap}>
                            <h2>दाङमा मोटरसाइकल दुर्घटनामा स्वास्थ्यकर्मीको मृत्यु</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.span_4}>
                <div className={styles.pradesh_post_news}>
                    <Link  className={styles.pradesh_post_news} href="/">
                        <Image src={ANSU} alt="" width={276} height={165}/>
                        <div className={styles.post_content_wrap}>
                            <h2>दाङमा मोटरसाइकल दुर्घटनामा स्वास्थ्यकर्मीको मृत्यु</h2>
                        </div>
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PradeshSamachar;
