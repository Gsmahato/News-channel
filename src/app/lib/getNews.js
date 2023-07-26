export default async function getNews(id) {
  try {
    const response = await fetch(`https://www.bimaabazar.com/newsportal/news/news/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error; 
  }
}
