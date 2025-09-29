import BibitSlider from "./Componen/Landingpaga/BibitSlider";
import DukungOleh from "./Componen/Landingpaga/DukungOleh";
import Footer from "./Componen/Landingpaga/Footer";
import Hero from "./Componen/Landingpaga/Hero";
import JoinMovement from "./Componen/Landingpaga/JoinMovement";
import Navbar from "./Componen/Landingpaga/navbar";
import Penghijauan from "./Componen/Landingpaga/Penghijauan";
import PohonList from "./Componen/Landingpaga/PohonList";
import Reboisasi from "./Componen/Landingpaga/Reboisasi";
import ReboisasiInfo from "./Componen/Landingpaga/ReboisasiInfo";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Reboisasi/>
      <Penghijauan/>
      <ReboisasiInfo/>
      <PohonList/>
      <BibitSlider/>
      <DukungOleh/>
      <JoinMovement/>
      <Footer/>
    </>
  );
}
