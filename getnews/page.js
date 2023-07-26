export default async function getNews(params) {
    const response = await fetch(
      `https://www.bimaabazar.com/newsportal/news/${params.id}`
    );
    const news = await response.json();
    return news;
  }