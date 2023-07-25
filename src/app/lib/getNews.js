export default async function getNews(newsId) {
  try {
    const response = await fetch(`https://www.bimaabazar.com/newsportal/news/news/${newsId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error; 
  }
}
