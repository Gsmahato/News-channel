export async function getNews(){
    const response = await fetch("https://www.bimaabazar.com/newsportal/news/");
    return response.json()
  }