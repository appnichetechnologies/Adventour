'use client';
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Register from "../components/auth/Register";

export default function Home() {
  return (
    <section id="home page" className="bg-white">
      <section id="navbar">
        <Navbar />
      </section>
      <section id="form">
        <Register/>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </section>
  );
} 
