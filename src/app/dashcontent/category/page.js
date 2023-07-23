"use client";
import React, { useState } from "react";
import styles from "../../styles/newStyles.module.css";
import { ToastContainer, toast } from "react-toastify";

const categorypage = () => {
  const [newCategory, setNewCategory] = useState({
    name: "",
    slug: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://www.bimaabazar.com/newsportal/categories/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New category added:", data);
      })
      .catch((error) => console.error("Error adding category:", error));
  };
  return (
    <div className={styles.app_main_outer}>
      <div className={styles.app_main_inner}>
        <div className={styles.row}>
          <div className={styles.main_content}>
            <div className={styles.main_content_bar}>&nbsp;</div>
            <span className={styles.main_content_title}>New News</span>
            <div>
              <div className={styles.write_content}>
                <h4>Create category</h4>

                <form onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <div className={styles.content_col}>
                      <div className={styles.content_col_form_group}>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={newCategory.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.content_col}>
                      <div className={styles.content_col_form_group}>
                        <input
                          type="text"
                          name="slug"
                          placeholder="Slug"
                          value={newCategory.slug}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.content_col}>
                      <div className={styles.content_col_form_group}>
                        <input
                          type="text"
                          name="description"
                          placeholder="Description"
                          value={newCategory.description}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.content_col}>
                      <button
                        type="submit"
                        className={styles.content_submit_btn}
                      >
                        Add category
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default categorypage;
