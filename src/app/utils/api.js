
export async function getNews() {
    const response = await fetch('https://bimaabazar.com/newsportal/news/');
    const data = await response.json();
  
    return data.map((news) => ({ slug: news.slug }));
  }
  
  export async function getNewsSlug(slug) {
    const response = await fetch(`https://bimaabazar.com/newsportal/news/${slug}`);
    const data = await response.json();
  
    return data;
  }