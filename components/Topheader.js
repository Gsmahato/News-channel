import Link from 'next/link'
import React from 'react'
import styles from '../src/app/page.module.css'
import Image from 'next/image'
import logo from '../public/logonews.png'
import banner from '../public/banner.gif'

const Topheader = () => {
  return (
    <>
        <div className={styles.topheader}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src={logo} width={268} height={31} alt=''/>
                    <div className={styles.currenttime}>6/24/2023</div>
                </div>
                <div className={styles.head_adv}>
                    <div className={styles.ad}>
                        <Image src={banner} width={700} height={70} alt=''/>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Topheader