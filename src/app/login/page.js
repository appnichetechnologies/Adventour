'use client';
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Login from "../components/auth/Login";

export default function Home() {
  return (
    <section id="home page" className="bg-white">
      <section id="navbar">
        <Navbar />
      </section>
      <section id="form">
        <Login/>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </section>
  );
} 
