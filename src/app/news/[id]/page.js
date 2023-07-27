import getNews from "../../../../utils/page";
export default async function Newspage({ params: { id } }){
  const news = await getNews(id)
  return(
    <>
      <div>{news.content}</div>
    </>
  )
}