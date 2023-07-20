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

const Sidebar = () => {
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
    } catch (error) {
      console.error("Error posting news:", error);
      toast.error("Failed to add news");
    }
  };

  const handleDelete = async (slug) => {
    try {
      const response = await axios.delete(
        `https://www.bimaabazar.com/newsportal/news/${slug}`
      );
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
                  <Link href="/dashboard" onClick={toggleUser}>
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
                        <Link href="/dashboard">
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
                        <Link href="/dashboard">
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
                        <Link href="/dashboard">
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
                  <Link href="/dashboard" onClick={toggleCategory}>
                    <i>
                      <i>
                        <RiGridLine />
                      </i>
                    </i>
                    All Categories
                    <div className={styles.right_icon}>
                      {isCategoryVisible ? <BiDownArrow /> : <BiRightArrow />}
                    </div>
                  </Link>
                  {isCategoryVisible && (
                    <ul>
                      <li className={styles.list_item}>
                        <Link href="/dashboard/category">
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
                        <Link href="/dashboard/category">
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
                  <Link href="/dashboard" onClick={toggleNews}>
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
                        <Link href="/dashboard/allnews">
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
                        <Link href="/dashcontent/writenews">
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
    </>
  );
};

export default Sidebar;
