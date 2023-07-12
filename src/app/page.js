import Adbanner from "../../components/Adbanner";
import Bijnesh from "../../components/Bijnesh";
import Entertainment from "../../components/Entertainment";
import Feature from "../../components/Feature";
import Footer from "../../components/Footer";
import Hottopic from "../../components/Hottopic";
import Latestnews from "../../components/Latestnews";
import Mukhya from "../../components/Mukhya";
import PradeshSamachar from "../../components/PradeshSamachar";
import Samachar from "../../components/Samachar";
import "./globals.css";
export default function Home({ news }) {
  return (
    <>
      <Hottopic />
      <Adbanner />
      <Latestnews news={news} />
      <Adbanner />
      <Mukhya />
      <Samachar />
      <Adbanner />
      <Bijnesh />
     <Adbanner />
       <PradeshSamachar />
      <Adbanner />
      {/* <Feature /> */}
      <Entertainment />
    </>
  );
}
