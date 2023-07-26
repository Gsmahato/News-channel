import React from "react";

async function Page({ params: { newsId } }) {
  const res = await fetch(
    `https://www.bimaabazar.com/newsportal/news/${newsId}`
  );
  const news = await res.json();
  console.log(news);
  return (
    <>
      <div>{news.content}</div>
    </>
  );
}

export default Page;
