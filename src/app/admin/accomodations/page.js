'use client';
import Navbar from "../../components/common/Navbar";
import AccomodationsForm from "../../components/admin/AccomodationsForm";
import Footer from "../../components/common/Footer";

export default function AccomodationsPage()
{
    return (
        <section className="bg-white">
            <section id="navbar">
                <Navbar/>
            </section>
            <section id="form">
                <AccomodationsForm/>
            </section>
            <section id="footer">
                <Footer/>
            </section>
        </section>
    );
}