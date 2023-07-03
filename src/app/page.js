import Adbanner from '../../components/Adbanner'
import Bijnesh from '../../components/Bijnesh'
import Entertainment from '../../components/Entertainment'
import Feature from '../../components/Feature'
import Hottopic from '../../components/Hottopic'
import Latestnews from '../../components/Latestnews'
import Mukhya from '../../components/Mukhya'
import Navbar from '../../components/Navbar'
import PradeshSamachar from '../../components/PradeshSamachar'
import Samachar from '../../components/Samachar'
import Topheader from '../../components/Topheader'
import './globals.css'

export default function Home() {
  return (
    <>
    <Topheader/>
    <Navbar/>
    <Hottopic/>
    <Adbanner/>
    <Latestnews/>
    <Adbanner/>
    {/* <Mukhya/> */}
    <Samachar/>
    <Adbanner/>
    <Bijnesh/>
    <Adbanner/>
    <PradeshSamachar/>
    <Adbanner/>
    <Feature/>
    <Entertainment/>
    </>
  )
}
