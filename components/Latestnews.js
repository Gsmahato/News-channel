import React from "react";
import styles from "../src/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaRegClock, FaRegCommentAlt } from "react-icons/fa";

async function getData() {
  const res = await fetch("https://www.bimaabazar.com/newsportal/news/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

function getMinutesAgo(created_at) {
  const createdDate = new Date(created_at);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - createdDate.getTime();
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  return minutesAgo;
}

function formatTime(minutes) {
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else {
    const hours = Math.floor(minutes / 60);
    return `${hours} hours ago`;
  }
}

export default async function Latestnews() {
  const data = await getData();
  data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return (
    <section className={styles.latest}>
      {data.map((late) => (
        <div className={styles.latest_container} key={late.slug}>
          <Link href={`/News/${late.slug}`}>
            <h2>{late.title}</h2>
          </Link>

          <div className={styles.title_info}>
            <div className={styles.news_author}>
              <span className={styles.author_icon}>
                <Image
                  src={`https://www.bimaabazar.com/${late.image1}`}
                  alt=""
                  width={100}
                  height={100}
                />
              </span>
              <span>{late.author}</span>
            </div>
            <div className={styles.post_hour}>
              <i>
                <FaRegClock />
              </i>
              <span>{formatTime(getMinutesAgo(late.created_at))}</span>
            </div>
            <div className={styles.news_comment}>
              <i>
                <FaRegCommentAlt />
              </i>
              <span>0</span>
            </div>
          </div>
          {late.image1 && (
            <div className={styles.latest_news_image}>
              <Link href={`/News/${late.id}`}>
                <Image
                  src={`https://www.bimaabazar.com/${late.image1}`}
                  alt=""
                  width={1248}
                  height={800}
                />
              </Link>
            </div>
          )}
          {!late.image1 && (
            <div
              className={styles.latest_news_image}
              style={{ display: "none" }}
            ></div>
          )}
          <p className={styles.latest_news_image_description}>{late.content}</p>
        </div>
      ))}
    </section>
  );
}
