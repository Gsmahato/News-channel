import styles from "../src/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import Authoricon from "../public/Gorkha.jpg";
import digital from "../public/digital.jpg";
import { FaRegClock, FaRegCommentAlt } from "react-icons/fa";

const Latestnews = ({ news }) => {
  console.log(news);
  return (
    <>
      <section className={styles.latest}>
        {/* {news.map((late) => ( */}
          <div className={styles.latest_container}>
            <h2>
              <Link href="/latest">मनसुनी रेखा नेपालतर्फ सर्दै, भोलिदेखि धेरै स्थानमा पानी पर्ने </Link>
            </h2>
            <div className={styles.title_info}>
              <div className={styles.news_author}>
                <span className={styles.author_icon}>
                  <Image src={Authoricon} alt="" width={100} height={100} />
                </span>
                <span>नेपाल नेपाल नेपाल नेपाल नेपाल नेपाल</span>
              </div>
              <div className={styles.post_hour}>
                <i>
                  <FaRegClock />
                </i>
                <span>५ मिनेट अगाडि</span>
              </div>
              <div className={styles.news_comment}>
                <i>
                  <FaRegCommentAlt />
                </i>
                <span>0</span>
              </div>
            </div>
            <div className={styles.latest_news_image}>
              <Link href="/">
                <Image
                  // src={`https://www.bimaabazar.com/${latest.image}`}
                  src={digital}
                  alt=""
                  width={1248}
                  height={700}
                />
              </Link>
            </div>
            <p className={styles.latest_news_image_description}>
              &apos;डिजिटल जादुगर&apos; हरू जन्मिने नै भए। तर, उनीहरूले
              लोकतन्त्रलाई बलियो बनाउँदैछन् कि कमजोर?&apos;डिजिटल जादुगर&apos;
              हरूले कता लैजाँदैछन् वा लैजान सक्छन् देशलाई?प्रियता र अवसरवाद या
              हाइपोक्रेसीतिर कि एक गम्भीर र संवेदनशील समाधानतिर?
            </p>
          </div>
        {/* ))} */}
      </section>
    </>
  );
};

export default Latestnews;
