
import styles from '@/app/page.module.css';
import Image from 'next/image';

export default async function Newspage({ params: { id } }) {
  const res = await fetch(`https://www.bimaabazar.com/newsportal/news/${id}`);
  const news = await res.json();
  return (
    <div className={styles.latest}>
      <h4>{news.title}</h4>
      <div>
        <Image src={`https://www.bimaabazar.com/${news.image1}`} alt="" width={1000} height={600} />
      </div>
    </div>
  );
}

