export async function getNews(id) {
    try {
      const res = await fetch(`https://www.bimaabazar.com/newsportal/news/${id}`);
      if (!res.ok) {
        // Handle non-200 HTTP status code, if needed
        throw new Error("Failed to fetch news");
      }
      return res.json();
    } catch (error) {
      // Handle any other errors that might occur during the fetch
      console.error("Error fetching news:", error);
      return null;
    }
  }