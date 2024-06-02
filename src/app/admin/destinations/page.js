'use client';
import Navbar from "../../components/common/Navbar";
import DestinationsForm from "../../components/admin/Destinations";
import Footer from "../../components/common/Footer";

export default function DestinationsFormPage()
{
    return(
        <section className="bg-white">
            <section id="navbar">
                <Navbar/>
            </section>
            <section id="form">
                <DestinationsForm/>
            </section>
            <section id="footer">
                <Footer/>
            </section>
        </section>
    )
}