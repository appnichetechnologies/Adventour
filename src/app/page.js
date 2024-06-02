'use client';
import Navbar from "./components/common/Navbar";
import LandingPage from "./components/home/LandingPage";
import Destination from "./components/home/Destination";
import Gallery from "./components/home/Gallery";
import Subscribe from "./components/home/Subscribe";
import Footer from "./components/common/Footer";

export default function Home()
{
  return (
    <section id="home page" className="bg-white">
        <section id="navbar">
          <Navbar/>
        </section>
        <section>
          <LandingPage/>
        </section>
        <section id="destinations">
          <Destination/>
        </section>
        <section id="gallery">
          <Gallery/>
        </section>
        <section id="subscribe">
          <Subscribe/>
        </section>
        <section id="footer">
          <Footer/>
        </section>
    </section>
  );
} 