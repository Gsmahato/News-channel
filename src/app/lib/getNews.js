export default async function getNews (id){
    const response = await fetch(`https://www.bimaabazar.com/newsportal/news/${id}`);
    if(!response.ok){
      throw new Error('failed to fetch news')
    }
    return response.json()
  }
// async function getNews(id) {
//   try {
//     const response = await fetch(`https://www.bimaabazar.com/newsportal/news/${id}`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch news');
//     }
//     return response.json();
//   } catch (error) {
//     // Handle the error here (e.g., log the error or display a user-friendly message)
//     console.error(error);
//     throw error; // Rethrow the error to handle it in the component
//   }
// }