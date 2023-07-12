import styles from "../src/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import Authoricon from "../public/Gorkha.jpg";
import digital from "../public/digital.jpg";
import { FaRegClock, FaRegCommentAlt } from "react-icons/fa";

async function getNews() {
  const response = await fetch("https://www.bimaabazar.com/newsportal/news/");
  const data = await response.json();
  return data;
}
export default async function Latestnews() {
  const news = await getNews();
  return (
    <>
      <section className={styles.latest}>
        {news.map((latest) => (
          <div className={styles.latest_container} key={latest.id}>
            <Link href={`/News/${latest.id}`}>
              <h2>{latest.title}</h2>
            </Link>

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
              <Link href={`/News/${latest.id}`}>
                <Image
                  src={`https://www.bimaabazar.com/${latest.image}`}
                  alt=""
                  width={1248}
                  height={700}
                />
              </Link>
            </div>
            <p className={styles.latest_news_image_description}>
              {latest.category.description}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
