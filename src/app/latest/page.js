import React from "react";

const Page = ({ news }) => {
     return (
    <div>
      {news.map((m) => (
        <div key={m.id}>
          <h2>{m.title}</h2>
          <p>{m.content}</p>
          <img src={m.image} alt="Article Image" />
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
    try {
      const res = await fetch('https://www.getfromnepal.com/productapi/');
      const news = await res.json();
  
      return {
        props: {
          news,
        },
      };
    } catch (error) {
      console.error('Error fetching news:', error);
      return {
        props: {
          news: [],
        },
      };
    }
  }
export default Page;
