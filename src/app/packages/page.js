'use client';
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import PackageCard from "../components/packages/PackageCard";

export default function Home() {
  return (
    <section id="home page" className="bg-white">
      <section id="navbar">
        <Navbar />
      </section>
      <section id="card">
        <PackageCard />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </section>
  );
} 
