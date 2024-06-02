'use client';
import Navbar from "../../components/common/Navbar";
import PackagesForm from "../../components/admin/PackagesForm";
import Footer from "../../components/common/Footer";

export default function PackagesPage()
{
    return (
        <section className="bg-white">
            <section id="navbar">
                <Navbar/>
            </section>
            <section id="form">
                <PackagesForm/>
            </section>
            <section id="footer">
                <Footer/>
            </section>
        </section>
    );
}