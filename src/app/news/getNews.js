// export async function getNews(id) {
//     const res = await fetch(`https://www.bimaabazar.com/newsportal/news/${id}`);
//     return res.json();
//   }
export async function getNews(id) {
  const res = await fetch(`https://www.bimaabazar.com/newsportal/news/${id}`);
  const text = await res.text();
  console.log(text);
  return JSON.parse(text);
}