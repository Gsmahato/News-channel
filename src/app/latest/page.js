import { getNews } from '@/app/utils/getNews'

export default async function Latestpage (id){
    const newsdata = await getNews(id)
  return (
    <>
    {newsdata.map((latest)=>(
      <div key={latest.id}>{latest.content}</div>
    ))}
    </>
  )
}

