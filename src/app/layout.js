import Navbar from "../../components/Navbar";
import Topheader from "../../components/Topheader";
import Footer from "../../components/Footer";
import Hottopic from "../../components/Hottopic";
import "./globals.css";
import styles from "./page.module.css";
export const metadata = {
  title: "abiralsanchar",
  description: "This is abiralsanchar",
};

export default function RootLayout({ children }) {
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
