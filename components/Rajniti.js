import React from "react";
import styles from "../src/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import ANSU from "../public/ANSU.jpg";
import digital from "../public/digital.jpg";
import prachar from "../public/prachar.gif";
import rightbanner1 from "../public/rightbanner1.gif";
import { MdArrowForwardIos } from "react-icons/md";

const Rajniti = () => {
  return (
    <section className={styles.bijnesh_samachar}>
      <div className={styles.news_container}>
        <div className={styles.col_left}>
          <div className={styles.section_title}>
            <h2 className={styles.title_part}>
              राजनीति
              <ul className={styles.title_pradesh_num}>
                <Link href="/">१</Link>
                <Link href="/">२</Link>
                <Link href="/">३</Link>
                <Link href="/">४</Link>
                <Link href="/">५</Link>
                <Link href="/">६</Link>
                <Link href="/">७</Link>
              </ul>
              <Link href="/pradeshsamachaar">
                <i className={styles.F_arrow}>
                  <MdArrowForwardIos />
                </i>
              </Link>
            </h2>
          </div>
          <ul className={styles.title_pradesh_num_2}>
            <Link href="/">१</Link>
            <Link href="/">२</Link>
            <Link href="/">३</Link>
            <Link href="/">४</Link>
            <Link href="/">५</Link>
            <Link href="/">६</Link>
            <Link href="/">७</Link>
          </ul>
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
                <Link className={styles.pradesh_post_news} href="/">
                  <Image src={ANSU} alt="" width={276} height={165} />
                  <div className={styles.post_content_wrap}>
                    <h2>दाङमा मोटरसाइकल दुर्घटनामा स्वास्थ्यकर्मीको मृत्यु</h2>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.span_4}>
              <div className={styles.pradesh_post_news}>
                <Link className={styles.pradesh_post_news} href="/">
                  <Image src={ANSU} alt="" width={276} height={165} />
                  <div className={styles.post_content_wrap}>
                    <h2>दाङमा मोटरसाइकल दुर्घटनामा स्वास्थ्यकर्मीको मृत्यु</h2>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.span_4}>
              <div className={styles.pradesh_post_news}>
                <Link className={styles.pradesh_post_news} href="/">
                  <Image src={ANSU} alt="" width={276} height={165} />
                  <div className={styles.post_content_wrap}>
                    <h2>दाङमा मोटरसाइकल दुर्घटनामा स्वास्थ्यकर्मीको मृत्यु</h2>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.span_4}>
              <div className={styles.pradesh_post_news}>
                <Link className={styles.pradesh_post_news} href="/">
                  <Image src={ANSU} alt="" width={276} height={165} />
                  <div className={styles.post_content_wrap}>
                    <h2>दाङमा मोटरसाइकल दुर्घटनामा स्वास्थ्यकर्मीको मृत्यु</h2>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.span_4}>
              <div className={styles.pradesh_post_news}>
                <Link className={styles.pradesh_post_news} href="/">
                  <Image src={digital} alt="" width={276} height={165} />
                  <div className={styles.post_content_wrap}>
                    <h2>दाङमा मोटरसाइकल दुर्घटनामा स्वास्थ्यकर्मीको मृत्यु</h2>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.span_4}>
              <div className={styles.pradesh_post_news}>
                <Link className={styles.pradesh_post_news} href="/">
                  <Image src={ANSU} alt="" width={276} height={165} />
                  <div className={styles.post_content_wrap}>
                    <h2>दाङमा मोटरसाइकल दुर्घटनामा स्वास्थ्यकर्मीको मृत्यु</h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.col_right}>
          <div className={styles.trending_vertical}>
            <h2>ट्रेन्डिङ</h2>
            <ul className={styles.t_news}>
              <li>
                <div className={styles.p_news}>
                  <Link href="/">
                    <span className={styles.trending_counter}>१</span>
                    <div className={styles.pradesh_content_wrap}>
                      <h2 className={styles.pradesh_title_text}>
                        ललिता निवास प्रकरणमा तीन जनालाई पक्राउ गर्नुको आधार र
                        कारण पेश गर्न सर्वोच्चको आदेश
                      </h2>
                    </div>
                    <Image src={ANSU} width={90} height={68} alt="" />
                  </Link>
                </div>
              </li>
              <li>
                <div className={styles.p_news}>
                  <Link href="/">
                    <span className={styles.trending_counter}>२</span>
                    <div className={styles.pradesh_content_wrap}>
                      <h2 className={styles.pradesh_title_text}>
                        ललिता निवास प्रकरणमा तीन जनालाई पक्राउ गर्नुको आधार र
                        कारण पेश गर्न सर्वोच्चको आदेश
                      </h2>
                    </div>
                    <Image src={ANSU} width={90} height={68} alt="" />
                  </Link>
                </div>
              </li>
              <li>
                <div className={styles.p_news}>
                  <Link href="/">
                    <span className={styles.trending_counter}>३</span>
                    <div className={styles.pradesh_content_wrap}>
                      <h2 className={styles.pradesh_title_text}>
                        ललिता निवास प्रकरणमा तीन जनालाई पक्राउ गर्नुको आधार र
                        कारण पेश गर्न सर्वोच्चको आदेश
                      </h2>
                    </div>
                    <Image src={ANSU} width={90} height={68} alt="" />
                  </Link>
                </div>
              </li>
              <li>
                <div className={styles.p_news}>
                  <Link href="/">
                    <span className={styles.trending_counter}>४</span>
                    <div className={styles.pradesh_content_wrap}>
                      <h2 className={styles.pradesh_title_text}>
                        ललिता निवास प्रकरणमा तीन जनालाई पक्राउ गर्नुको आधार र
                        कारण पेश गर्न सर्वोच्चको आदेश
                      </h2>
                    </div>
                    <Image src={ANSU} width={90} height={68} alt="" />
                  </Link>
                </div>
              </li>
              <li>
                <div className={styles.p_news}>
                  <Link href="/">
                    <span className={styles.trending_counter}>५</span>
                    <div className={styles.pradesh_content_wrap}>
                      <h2 className={styles.pradesh_title_text}>
                        ललिता निवास प्रकरणमा तीन जनालाई पक्राउ गर्नुको आधार र
                        कारण पेश गर्न सर्वोच्चको आदेश
                      </h2>
                    </div>
                    <Image src={ANSU} width={90} height={68} alt="" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.bijnesh_right_2}>
            <div className={styles.side_ad}>
              <div
                className={styles.desktop_mukhya_ad}
                data-alias="home-mukhya-right"
                data-device-type="desktop"
              >
                <div className={styles.each_ad}>
                  <Link href="/">
                    <Image src={rightbanner1} width={300} height={150} alt="" />
                  </Link>
                </div>
                <div className={styles.each_ad}>
                  <Link href="/">
                    <Image src={rightbanner1} width={300} height={150} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rajniti;
