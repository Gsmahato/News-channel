"use client";
import { useState, useEffect } from "react";
import styles from "../../styles/newStyles.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsEditor from "../../../../components/NewsEditor";

export default function Newswrite() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [featured, setFeatured] = useState(false);
  const [latest, setLatest] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isClient, setIsClient] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newsData = {
      title,
      slug,
      content,
      category,
      author,
      featured,
      latest,
    };

    console.log("newsData:", newsData); // Log the newsData object for debugging

    try {
      const response = await axios.post(
        "https://www.bimaabazar.com/newsportal/news/",
        newsData
      );
      console.log("News posted successfully:", response.data);
      toast.success("News added successfully");
      setTitle("");
      setSlug("");
      setContent("");
      setCategory("");
      setAuthor("");
      setFeatured(false);
      setLatest(false);
    } catch (error) {
      console.error("Error posting news:", error);
      toast.error("Failed to add news");
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://www.bimaabazar.com/newsportal/news/"
        );
        setNewsList(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.bimaabazar.com/newsportal/categories/"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div className={styles.app_main_outer}>
        <div className={styles.app_main_inner}>
          <div className={styles.row}>
            <div className={styles.main_content}>
              <div className={styles.main_content_bar}>&nbsp;</div>
              <span className={styles.main_content_title}>New News</span>
              <div>
                <div className={styles.write_content}>
                  <h4>Create News</h4>
                  <form
                    onSubmit={handleSubmit}
                    className={styles.news_form}
                    name="news-form"
                  >
                    <ul>
                      <li>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <div className={styles.content_col_form_group}>
                              <input
                                type="text"
                                name="news_title"
                                required="required"
                                placeholder="News title *"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <div className={styles.content_col_form_group}>
                              <input
                                type="text"
                                name="news_title"
                                required="required"
                                placeholder="slug*"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <div className={styles.content_col_form_group}>
                              {/* Use NewsEditor to enter news content */}
                              <NewsEditor
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                                content={content}
                                setContent={setContent}
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <div className={styles.content_col_form_group}>
                              <label>Choose feature image</label>
                              <input
                                type="file"
                                name="news_image"
                                className={styles.form_control}
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <div className={styles.content_col_form_group}>
                              <label htmlFor="author">Author</label>
                              <input
                                type="text"
                                name="author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <div className={styles.content_col_form_group}>
                              <label>Select Category</label>
                              <select
                                className={styles.select_content}
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                              >
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                  <option key={category.id} value={category.id}>
                                    {category.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <div className={styles.content_col_form_group}>
                              <label htmlFor="featured">
                                <input
                                  type="checkbox"
                                  name="featured"
                                  checked={featured}
                                  onChange={(e) =>
                                    setFeatured(e.target.checked)
                                  }
                                />
                                Featured
                              </label>
                              <label htmlFor="latest">
                                <input
                                  type="checkbox"
                                  name="latest"
                                  checked={latest}
                                  onChange={(e) => setLatest(e.target.checked)}
                                />
                                Latest News
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <button
                              type="submit"
                              className={styles.content_submit_btn}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
