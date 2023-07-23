// import getNews from "@/app/lib/getNews";
async function getData() {
  const res = await fetch('https://www.bimaabazar.com/newsportal/news/')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
export default async function Newspage() {
  const news = await getData();
  return (
    <>
      {news.map((newscontent) => {
        <div key={newscontent.id}>{newscontent.content}</div>;
      })}
    </>
  );
}
