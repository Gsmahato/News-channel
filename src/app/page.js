import Entertainment from "../../components/Entertainment";
import Khelkud from "../../components/Khelkud";
import Latestnews from "../../components/Latestnews";
import Mukhya from "../../components/Mukhya";
import Aarthik from "../../components/Aarthik";
import Samachar from "../../components/Samachar";
import "./globals.css";
import BigyanPrabhidhi from "../../components/BigyanPrabhidhi";
import Rajniti from "../../components/Rajniti";
export default function Home({newsData}) {
  return (
    <>
      <Latestnews />
      <Mukhya />
      <Samachar />
      <Aarthik />
      <Rajniti />
      <Entertainment />
      <BigyanPrabhidhi />
      <Khelkud />
    </>
  );
}
export const getServerSideProps = async ()=>{
  const res = await fetch("https://www.bimaabazar.com/newsportal/news/")
  const newsData = await res.json()
  return{props:{newsData}}
}