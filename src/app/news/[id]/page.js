import { getNews } from "../getNews"
export default async function Newspage({ params: { id } }){
  const news = await getNews(id)
  console.log(news)
  return(
      <div>{news.content}</div>
  )
}

