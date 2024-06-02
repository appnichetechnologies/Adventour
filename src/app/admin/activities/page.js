'use client';
import Navbar from "../../components/common/Navbar";
import ActivitiesForm from "../../components/admin/ActivitiesForm";
import Footer from "../../components/common/Footer";

export default function ActivitiesPage()
{
    return (
        <section className="bg-white">
            <section id="navbar">
                <Navbar/>
            </section>
            <section id="form">
                <ActivitiesForm/>
            </section>
            <section id="footer">
                <Footer/>
            </section>
        </section>
    );
}