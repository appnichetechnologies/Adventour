'use client';
import Navbar from "../../components/common/Navbar";
import Dashboard from "../../components/admin/Dashboard";
import Footer from "../../components/common/Footer";

export default function DashboardPage()
{
    return (
        <section className="bg-white ">
            <section id="navbar">
                <Navbar/>
            </section>
            <section id="Dashboard">
                <Dashboard/>
            </section>
            <section id="Footer">
                <Footer/>
            </section>
        </section>
    )
}