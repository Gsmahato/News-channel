"use client";
import styles from "../src/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import Authoricon from "../public/Gorkha.jpg";
import { FaRegClock, FaRegCommentAlt } from "react-icons/fa";

async function getAllNews() {
  const response = await fetch("https://www.bimaabazar.com/newsportal/news/");
  const data = await response.json();
  return data;
}
export default async function Latestnews() {
  const news = await getAllNews();

  return (
    <>
      <section className={styles.latest}>
        {news.map((late) => (
          <div className={styles.latest_container} key={late.slug}>
            <Link href={`/News/${late.slug}`}>
              <h2>{late.title}</h2>
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
            <div
              className={`${styles.latest_news_image} ${
                late.image ? '' : styles.hidden
              }`}
            >
              {late.image && (
                <Link href={`/News/${late.id}`}>
                  <Image
                    src={`https://www.bimaabazar.com/${late.image}`}
                    alt=""
                    width={1248}
                    height={700}
                  />
                </Link>
              )}
            </div>
            <p className={styles.latest_news_image_description}>
              {late.content}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
