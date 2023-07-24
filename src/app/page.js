import Adbanner from "../../components/Adbanner";
import Bijnesh from "../../components/Bijnesh";
import Entertainment from "../../components/Entertainment";
import Feature from "../../components/Feature";
import Khelkud from "../../components/Khelkud";
import Latestnews from "../../components/Latestnews";
import Mukhya from "../../components/Mukhya";
import PradeshSamachar from "../../components/PradeshSamachar";
import Samachar from "../../components/Samachar";
import "./globals.css";
import RootLayout from "./layout";
export default function Home() {
  return (
    <>
        {/* <Adbanner /> */}
        <Latestnews />
        {/* <Adbanner /> */}
        <Mukhya />
        <Samachar />
        {/* <Adbanner /> */}
        <Bijnesh />
        {/* <Adbanner /> */}
        <PradeshSamachar />
        {/* <Adbanner /> */}
        {/* <Feature /> */}
        <Entertainment />
        <Khelkud />
    </>
  );
}
