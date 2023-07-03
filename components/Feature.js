import React from 'react'
import styles from "../src/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import ANSU from "../public/ANSU.jpg";
import digital from "../public/digital.jpg"
import prachar from "../public/prachar.gif";
import { MdArrowForwardIos } from "react-icons/md";


const Feature = () => {
  return (
    <section className={styles.feature_section}>
        <div className={styles.container}>
        <div className={styles.section_title}>
            <h2 className={styles.title_part}>
            फिचर
              <Link href="/">
                <i className={styles.F_arrow}>
                  <MdArrowForwardIos />
                </i>
              </Link>
            </h2>
          </div>

        </div>
    </section>
  )
}

export default Feature