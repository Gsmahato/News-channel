import { getNews } from "../getNews";
import styles from '@/app/page.module.css'
import Image from "next/image";
export default async function Newspage({ params: { id } }) {
  const news = await getNews(id);
  console.log(news);
  return (
    <div className={styles.latest}>
      <h4>{news.title}</h4>
      <div>
      <Image
        src={`https://www.bimaabazar.com/${news.image1}`}
        alt=""
        width={1000}
        height={600}
      />
      </div>

      {news.content}
    </div>
  );
}
