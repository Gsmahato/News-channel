import React from 'react'
import styles from "../src/app/page.module.css";
import Link from 'next/link';
import Image from 'next/image';
import Adb from '../public/adb.gif'

const Adbanner = () => {
  return (
    <>
    <section className={styles.full_adbanner}>
        <div className={styles.news_container}>
            <div className={styles.add_adv}>
                <div className={styles.add_wrap}>
                    <Link href="/">
                        <Image src={Adb} alt='' width={1250} height={100}/>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Adbanner