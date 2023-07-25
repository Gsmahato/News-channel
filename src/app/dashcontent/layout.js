import Sidebar from "./sidebar/page";
import styles from "../styles/newStyles.module.css"

export default function DashboardLayout({ children }) {
    return (
      <>
      <div className={styles.dasc}>
        <Sidebar/>
        {children}
        </div>
      </>
    );
  }