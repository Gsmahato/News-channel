"use client"
import React, { useEffect, useState } from "react";

async function getData(id) {
  try {
    const res = await fetch(`https://www.bimaabazar.com/newsportal/news/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; // Rethrow the error to be caught by the component
  }
}
export default function Newspage({ id }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts or when 'id' changes
    getData(id)
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]); // Fetch data whenever the 'id' changes

  return (
    <>
      {news.map((newscontent) => (
        <div key={newscontent.id}>{newscontent.content}</div>
      ))}
    </>
  );
}



