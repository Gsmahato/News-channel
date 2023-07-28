// import styles from '@/app/page.module.css';
// import Image from 'next/image';

// export default async function Newspage({ params: { id } }) {
//   const res = await fetch(`https://www.bimaabazar.com/newsportal/news/${id}`);
//   const news = await res.json();
//   return (
//     <div className={styles.latest}>
//       <h4>{news.title}</h4>
//       <div>
//         <Image src={`https://www.bimaabazar.com/${news.image1}`} alt="" width={1000} height={600} />
//       </div>
//     </div>
//   );
// }

"use client"
import React from 'react'; // Add this line to import React

import styles from '@/app/page.module.css';
import Image from 'next/image';

export default function Newspage({ params: { id } }) {
  const [news, setNews] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`https://www.bimaabazar.com/newsportal/news/${id}`);
        if (!res.ok) {
          throw new Error('API request failed');
        }
        const data = await res.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!news) {
    return <div>Error: Unable to fetch news data.</div>;
  }

  return (
    <div className={styles.latest}>
      <h4>{news.title}</h4>
      <div>
        <Image src={`https://www.bimaabazar.com/${news.image1}`} alt="" width={1000} height={600} />
      </div>
    </div>
  );
}


