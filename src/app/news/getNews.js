export async function getNews(id) {
    const res = await fetch(`https://www.bimaabazar.com/newsportal/news/${id}`);
    return res.json();
  }
  