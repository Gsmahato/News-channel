export default async function NewsContent({ params: { id } }) {
  const res = await fetch(`https://www.bimaabazar.com/newsportal/news/${id}`);
  const news = await res.json();
  return (
    <>
      <div>{news.content}</div>
    </>
  );
}
