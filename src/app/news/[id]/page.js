import getNews from "../utils/page";
export default async function Newspage({ params: { id } }){
  const news = await getNews(id)
  console.log(news)
  return(
      <div>{news.content}</div>
  )
}

// export default async function getStaticProps({ params }) {
//   const res = await fetch(`https://www.bimaabazar.com/newsportal/news/${params.id}`);
//   const latestnews = await res.json();
//   console.log(latestnews); // Log the fetched data to check its structure

//   return { props: { latestnews } };
// }

