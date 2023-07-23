"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/newStyles.module.css";

export default function Allnewspage() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNewsList = async () => {
      try {
        const response = await fetch(
          "https://www.bimaabazar.com/newsportal/news/"
        );
        if (response.ok) {
          const data = await response.json();
          setNewsList(data);
        } else {
          console.error("Failed to fetch news articles.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchNewsList();
  }, []);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this news article?"
    );
    if (!isConfirmed) {
      return; // Cancel deletion
    }

    try {
      const response = await fetch(
        `https://www.bimaabazar.com/newsportal/news/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("News article deleted successfully!");
        setNewsList((prevNewsList) =>
          prevNewsList.filter((news) => news.id !== id)
        );
      } else {
        console.error("Failed to delete news article.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.app_main_outer}>
      <div className={styles.app_main_inner}>
        <div className={styles.row}>
          <div className={styles.main_content}>
            <div className={styles.main_content_bar}>&nbsp;</div>
            <span className={styles.main_content_title}>All News</span>
            <div>
              <div className={styles.write_content}>
                <h4>Create News</h4>
                <table className={styles.news_table}>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Content</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newsList.map((news) => (
                      <tr key={news.id}>
                        <td>{news.title}</td>
                        <td>{news.content}</td>
                        <td>
                          <button
                            onClick={() => {
                              // Implement edit functionality here
                              console.log("Edit clicked for news ID:", news.id);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button onClick={() => handleDelete(news.id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
