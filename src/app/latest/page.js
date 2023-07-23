
async function getData() {
  const res = await fetch('https://www.bimaabazar.com/newsportal/news/')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
export default async function Latestpage(id) {
  const newsdata = await getData(id);
  return (
    <>
      {newsdata.map((latest) => (
        <div key={latest.id}>{latest.content}</div>
      ))}
    </>
  );
}
