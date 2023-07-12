"use client";
import { useState, useEffect } from "react";
import styles from "../styles/newStyles.module.css";
import Link from "next/link";
import axios from "axios";
// import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  RiDashboardLine,
  RiAdminFill,
  RiGridLine,
  RiNewspaperLine,
} from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu, FiUserPlus } from "react-icons/fi";
import { BiRightArrow, BiDownArrow } from "react-icons/bi";
const AdminHome = () => {
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
    };
  
    try {
      const response = await axios.post("https://www.bimaabazar.com/newsportal/news/", newsData);
      console.log("News posted successfully:", response.data);
      toast.success("News added successfully");
      setTitle("");
      setSlug("");
      setContent("");
      setCategory(1);
      setAuthor(1);
      setFeatured(false);
    } catch (error) {
      console.error("Error posting news:", error);
      toast.error("Failed to add news");
    }
  };

  const handleDelete = async (slug) => {
    try {
      const response = await axios.delete(`https://www.bimaabazar.com/newsportal/news/${slug}`);
      console.log("News deleted successfully:", response.data);
      toast.success("News deleted successfully");
      const updatedNewsList = newsList.filter((news) => news.slug !== slug);
      setNewsList(updatedNewsList);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("News not found");
      } else {
        console.error("Error deleting news:", error);
        toast.error("Failed to delete news");
      }
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
      <ToastContainer />

      <div className={styles.app_container}>
        <div className={styles.app_main}>
          <div className={styles.sidebar}>
            <div className={styles.sidebar_scroll}>
              <div className={styles.sidebar_inner}>
                <h5 className={styles.sidebar_heading}>
                  <i>
                    <RiDashboardLine />
                  </i>
                  Dashboard
                </h5>
                <div className={styles.multimenu}>
                  <ul className={styles.multimenu_container}>
                    <li
                      className={`${styles.multimenu_item} ${
                        isUserVisible ? styles.active : ""
                      }`}
                    >
                      <Link href="/newspost" onClick={toggleUser}>
                        <i>
                          <FaUserAlt />
                        </i>
                        Users
                        <div className={styles.right_icon}>
                          {isUserVisible ? <BiDownArrow /> : <BiRightArrow />}
                        </div>
                      </Link>
                      {isUserVisible && (
                        <ul>
                          <li className={styles.list_item}>
                            <Link href="/newspost">
                              <i>
                                <RiAdminFill />
                              </i>
                              Admin
                              <div className={styles.right_icon_2}>
                                <i>
                                  <BiRightArrow />
                                </i>
                              </div>
                            </Link>
                          </li>
                          <li className={styles.list_item}>
                            <Link href="/newspost">
                              <i>
                                <RiAdminFill />
                              </i>
                              Sub Admin
                              <div className={styles.right_icon_2}>
                                <i>
                                  <BiRightArrow />
                                </i>
                              </div>
                            </Link>
                          </li>
                          <li className={styles.list_item}>
                            <Link href="/newspost">
                              <i>
                                <RiAdminFill />
                              </i>
                              Add Sub Admin
                              <div className={styles.right_icon_2}>
                                <i>
                                  <BiRightArrow />
                                </i>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li
                      className={`${styles.multimenu_item} ${
                        isCategoryVisible ? styles.active : ""
                      }`}
                    >
                      <Link href="/newspost" onClick={toggleCategory}>
                        <i>
                          <i>
                            <RiGridLine />
                          </i>
                        </i>
                        All Categories
                        <div className={styles.right_icon}>
                          {isCategoryVisible ? (
                            <BiDownArrow />
                          ) : (
                            <BiRightArrow />
                          )}
                        </div>
                      </Link>
                      {isCategoryVisible && (
                        <ul>
                          <li className={styles.list_item}>
                            <Link href="/newspost">
                              <i>
                                <RiGridLine />
                              </i>
                              All Categories
                              <div className={styles.right_icon_2}>
                                <i>
                                  <BiRightArrow />
                                </i>
                              </div>
                            </Link>
                          </li>
                          <li className={styles.list_item}>
                            <Link href="/newspost">
                              <i>
                                <RiGridLine />
                              </i>
                              Categories
                              <div className={styles.right_icon_2}>
                                <i>
                                  <BiRightArrow />
                                </i>
                              </div>
                            </Link>
                          </li>
                          <li className={styles.list_item}>
                            <Link href="/newspost">
                              <i>
                                <RiGridLine />
                              </i>
                              Add Category
                              <div className={styles.right_icon_2}>
                                <i>
                                  <BiRightArrow />
                                </i>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li
                      className={`${styles.multimenu_item} ${
                        isNewsVisible ? styles.active : ""
                      }`}
                    >
                      <Link href="/newspost" onClick={toggleNews}>
                        <i>
                          <RiNewspaperLine />
                        </i>
                        News
                        <div className={styles.right_icon}>
                          {isNewsVisible ? <BiDownArrow /> : <BiRightArrow />}
                        </div>
                      </Link>
                      {isNewsVisible && (
                        <ul>
                          <li className={styles.list_item}>
                            <Link href="/newspost">
                              <i>
                                <RiNewspaperLine />
                              </i>
                              All News
                              <div className={styles.right_icon_2}>
                                <i>
                                  <BiRightArrow />
                                </i>
                              </div>
                            </Link>
                          </li>
                          <li className={styles.list_item}>
                            <Link href="/newspost">
                              <i>
                                <RiNewspaperLine />
                              </i>
                              Add News
                              <div className={styles.right_icon_2}>
                                <i>
                                  <BiRightArrow />
                                </i>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
                                  <div className={styles.content_details_page}>
                                    <div
                                      className={styles.content_details_page1}
                                    ></div>
                                  </div>
                                  <textarea
                                    className={styles.form_control}
                                    name="content"
                                    placeholder="Content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                  ></textarea>
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
                                    onChange={(e) =>
                                      setCategory(e.target.value)
                                    }
                                    required
                                  >
                                    <option value={1}>Category 1</option>
                                    <option value={2}>Category 2</option>
                                    {/* Add more options for categories */}
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
                                    {/* Add more options for authors */}
                                  </select>
                                </div>
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
              <div className={styles.delete_news}>
                <h4>Delete News</h4>
                {newsList.map((news) => (
                  <div key={news.slug}>
                    <h2>{news.title}</h2>
                    <button onClick={() => handleDelete(news.slug)}>
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
