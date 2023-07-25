async function getNews(slug) {
    try {
      const response = await fetch(
        `https://www.bimaabazar.com/newsportal/news/${slug}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }
      return response.json();
    } catch (error) {
      console.error("Error fetching news:", error);
      throw error;
    }
  }
  
  export default async function News({ params: { slug } }) {
    try {
      const newsData = await getNews(slug);
      console.log(newsData);
      return <h2>{newsData.id}</h2>;
    } catch (error) {
      // Handle errors here if needed.
      console.error("Error in News component:", error);
      return <h2>Error fetching news</h2>; // Return a default value or handle the error as per your requirement.
    }
  }
  
  
