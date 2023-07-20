"use client";
import { useState, useEffect } from "react";
import styles from "../../styles/newStyles.module.css";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  RiDashboardLine,
  RiAdminFill,
  RiGridLine,
  RiNewspaperLine,
} from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai";
// import { FiMenu, FiUserPlus } from "react-icons/fi";
import { BiRightArrow, BiDownArrow } from "react-icons/bi";
import NewsEditor from "../../../../components/NewsEditor";

const Newswrite = () => {
  const [isUserVisible, setUserVisible] = useState(false);
  const [isCategoryVisible, setCategoryVisible] = useState(false);
  const [isNewsVisible, setNewsVisible] = useState(false);

  const toggleUser = () => {
    setUserVisible(!isUserVisible);
  };
  const toggleCategory = () => {
    setCategoryVisible(!isCategoryVisible);
  };
  const toggleNews = () => {
    setNewsVisible(!isNewsVisible);
  };
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(1);
  const [author, setAuthor] = useState(1);
  const [featured, setFeatured] = useState(false);
  const [latest, setLatest] = useState(false);
  const [newsList, setNewsList] = useState([]);

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
      trending,
    };

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
      setCategory(1);
      setAuthor(1);
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
                              <NewsEditor
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                require
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
                              <select
                                className={styles.select_content}
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                              >
                                <option value={1}>Category 1</option>
                                <option value={2}>Category 2</option>
                              </select>
                              <select
                                className={styles.select_content}
                                name="author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                required
                              >
                                <option value={1}>Author</option>
                                <option value={1}>Author 1</option>
                                <option value={2}>Author 2</option>
                              </select>
                            </div>
                            <div className={styles.feature_content}>
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
                              <label htmlFor="featured">
                                <input
                                  type="checkbox"
                                  name="featured"
                                  checked={latest}
                                  onChange={(e) =>
                                    setFeatured(e.target.checked)
                                  }
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
    </>
  );
};

export default Newswrite;
