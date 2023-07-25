export default async function getNews(newsId) {
  try {
    const response = await fetch(`https://www.bimaabazar.com/newsportal/news/${newsId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    return response.json();
  } catch (error) {
    // Handle any fetch or JSON parsing errors here if needed.
    console.error('Error fetching news:', error);
    throw error; // Rethrow the error to be handled by the calling function if necessary.
  }
}