import { getNews } from '@/app/utils/getNews'

export default async function Newspage ({params:{id}}){
    const newsdata = await getNews(id)
  return (
    <div>{newsdata.content}</div>
  )
}