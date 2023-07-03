import React from 'react'
import styles from "../src/app/page.module.css";
import Link from 'next/link';
import Image from 'next/image';
import Gorkha from '../public/Gorkha.jpg'
import {GoSearch} from 'react-icons/go'


const Hottopic = () => {
  return (
    <>
    <div className={styles.hot_topic}>
        <div className={styles.container}>
            <div className={styles.topic_tag}>
                <Link href="#">
                    <span className={styles.topic_round}>
                        <Image src={Gorkha} width={100} height={100} alt=''/>
                    </span>
                    गोरखा 
                </Link>
                <Link href="#">
                    <span className={styles.topic_round}>
                        <Image src={Gorkha} width={100} height={100} alt=''/>
                    </span>
                    विश्वकप क्रिकेट छनोट 
                </Link>
                <Link href="#">
                    <span className={styles.topic_round}>
                        <Image src={Gorkha} width={100} height={100} alt=''/>
                    </span>
                    विश्वकप क्रिकेट छनोट 
                </Link>
                <Link href="#">
                    <span className={styles.topic_round}>
                        <Image src={Gorkha} width={100} height={100} alt=''/>
                    </span>
                    गोरखा 
                </Link>
                <Link href="#">
                    <span className={styles.topic_round}>
                        <Image src={Gorkha} width={100} height={100} alt=''/>
                    </span>
                    विश्वकप क्रिकेट छनोट 
                </Link>
                <Link href="#">
                    <span className={styles.topic_round}>
                        <Image src={Gorkha} width={100} height={100} alt=''/>
                    </span>
                    विश्वकप क्रिकेट छनोट 
                </Link>
                <Link href="#">
                    <span className={styles.topic_round}>
                        <Image src={Gorkha} width={100} height={100} alt=''/>
                    </span>
                    विश्वकप क्रिकेट छनोट 
                </Link>
            </div>
            <div className={styles.smart_search}>
                <form className={styles.top_search} action="/">
                    <input type="text" placeholder='Search Keywords' className={styles.search_fields} autoComplete='off'    />
                    <span className={styles.search_icon}>
                        <i><GoSearch/></i>
                    </span>

                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hottopic