import Hero from "./Componen/Landingpaga/Hero";
import Navbar from "./Componen/Landingpaga/navbar";
import Penghijauan from "./Componen/Landingpaga/Penghijauan";
import Reboisasi from "./Componen/Landingpaga/Reboisasi";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Reboisasi/>
      <Penghijauan/>
    </>
  );
}
