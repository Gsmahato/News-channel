import React from 'react';
import styles from '../src/app/page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegClock, FaRegCommentAlt } from 'react-icons/fa';

// async function getAllNews() {
//   const response = await fetch('https://www.bimaabazar.com/newsportal/news/');
//   const data = await response.json();
//   return data;
// }
async function getData() {
  const res = await fetch('https://www.bimaabazar.com/newsportal/news/')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
function getMinutesAgo(created_at) {
  const createdDate = new Date(created_at);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - createdDate.getTime();
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  return minutesAgo;
}

export default async function Latestnews() {

  // const latestNews = await getAllNews()
  const data = await getData()


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
                <Image src={`https://www.bimaabazar.com/${late.image}`} alt="" width={100} height={100} />
              </span>
              <span>{late.author}</span>
            </div>
            <div className={styles.post_hour}>
              <i>
                <FaRegClock />
              </i>
              <span>{getMinutesAgo(late.created_at)} मिनेट अगाडि</span>
            </div>
            <div className={styles.news_comment}>
              <i>
                <FaRegCommentAlt />
              </i>
              <span>0</span>
            </div>
          </div>
          {late.image && (
            <div className={styles.latest_news_image}>
              <Link href={`/News/${late.id}`}>
                <Image src={`https://www.bimaabazar.com/${late.image}`} alt="" width={1248} height={700} />
              </Link>
            </div>
          )}
          {!late.image && <div className={styles.latest_news_image} style={{ display: 'none' }}></div>}
          <p className={styles.latest_news_image_description}>{late.content}</p>
        </div>
      ))}
    </section>
  );
}

