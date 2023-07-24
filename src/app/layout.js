"use client"
import Navbar from "../../components/Navbar";
import Topheader from "../../components/Topheader";
import Footer from "../../components/Footer";
import Hottopic from "../../components/Hottopic";
import "./globals.css";
import styles from "./page.module.css";
const metadata = {
  title: "abiralsanchar",
  description: "This is abiralsanchar",
};

import { useRouter } from 'next/navigation';

export default function RootLayout({ children }) {
  const router = useRouter();

  if (router.pathname === '/dashcontent') {
    return (
      <html lang="en">
        <body>
            <div className={styles.home_container}>
              {children}
            </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
          <div className={styles.home_container}>
            <Topheader />
            <Navbar />
            <Hottopic />
            {children}
            <Footer />
          </div>
      </body>
    </html>
  );
}
