"use client"
import { usePathname } from 'next/navigation';
export const LayoutProvider = ( { children }) => {
  const pathname = usePathname ();
  return (
    <>
      {pathname ==="/dashcontent" && <h1>Welcome to Posts page!</h1>}
      {children}
    </>
  )
};