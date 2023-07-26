import Adbanner from "../../components/Adbanner";
import Rajnit from "../../components/Aarthik";
import Entertainment from "../../components/Entertainment";
import Khelkud from "../../components/Khelkud";
import Latestnews from "../../components/Latestnews";
import Mukhya from "../../components/Mukhya";
import Aarthik from "../../components/Aarthik";
import Samachar from "../../components/Samachar";
import "./globals.css";
import BigyanPrabhidhi from "../../components/BigyanPrabhidhi";
import Rajniti from "../../components/Rajniti";
export default function Home() {
  return (
    <>
      {/* <Adbanner /> */}
      <Latestnews />
      {/* <Adbanner /> */}
      <Mukhya />
      <Samachar />
      {/* <Adbanner /> */}
      <Aarthik />
      {/* <Adbanner /> */}
      <Rajniti />
      {/* <Adbanner /> */}
      {/* <Feature /> */}
      <Entertainment />
      <BigyanPrabhidhi />
      <Khelkud />
    </>
  );
}
