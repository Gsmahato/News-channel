import Sidebar from "./sidebar/page";

export default function DashboardLayout({ children }) {
    return (
      <>
        <Sidebar/>
        {children}
      </>
    );
  }