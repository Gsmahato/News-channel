"use client"
// Import axios library
import axios from 'axios';
import { useState,useEffect } from 'react';
import styles from '../../styles/newStyles.module.css';

async function getCategory() {
  const res = await fetch('https://www.bimaabazar.com/newsportal/categories/');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default function Allcategorypage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (categoryId) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId]
    );
  };

  const handleDeleteSelectedCategories = async () => {
    try {
      // Send a request to the server to delete the selected categories
      await Promise.all(
        selectedCategories.map((categoryId) =>
          axios.delete(`https://www.bimaabazar.com/newsportal/categories/${categoryId}`)
        )
      );
      // Update the categories list after successful deletion
      setCategories((prevCategories) =>
        prevCategories.filter((category) => !selectedCategories.includes(category.id))
      );
      setSelectedCategories([]);
      console.log('Selected categories deleted successfully');
    } catch (error) {
      console.error('Error deleting selected categories:', error);
    }
  };

  // Use the useEffect hook to fetch the categories only once when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategory();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
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
                  <h4>Categories</h4>
                  <ul>
                    {categories.map((category) => (
                      <li key={category.id}>
                        <label>
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category.id)}
                            onChange={() => handleCheckboxChange(category.id)}
                          />
                          <span>{category.name}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                  <button onClick={handleDeleteSelectedCategories}>Delete Selected</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
