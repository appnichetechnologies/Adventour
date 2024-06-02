import { IoLocationSharp } from "react-icons/io5";
import { IoMdLocate } from "react-icons/io";
import { MdDescription } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { GiHiking } from "react-icons/gi";
import { BiCollection } from "react-icons/bi";
import { useState, useEffect } from "react";
import { FaCalendarDay } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

export default function PackagesForm() {
    const [destination, setDestination] = useState([]);
    const [accommodation, setAccommodation] = useState([]);
    const [activities, setActivities] = useState([]);

    useEffect(() => {

        const fetchdata = async () => {
            const res = await fetch("/api/destinations/fetch");
            const response = await res.json();
            setDestination(response.output);

            const res1 = await fetch("/api/activities/fetch");
            const response1 = await res1.json();
            setActivities(response1.output);

            const res2 = await fetch("/api/accomodations/fetch");
            const response2 = await res2.json();
            setAccommodation(response2.output);
        }

        fetchdata();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const type = event.target.type.value;
        const start_date = event.target.start.value;
        const end_date = event.target.end.value;
        const price = event.target.price.value;
        const destination = event.target.destination.value;
        const accomodations = event.target.accomodation.value;
        const activity = event.target.activities.value;
        const description = event.target.description.value;

        if (
            name === '' || destination === '' || description === '' || type === '' || start_date === '' || end_date === '' || price === '' || destination === ''  ) {
            alert('Invalid Values Please fill the form then submit');
        }

        try {
            const res = await fetch('/api/packages/insert', {
                method: 'POST',
                body: JSON.stringify(
                    {
                        name,
                        type,
                        start_date,
                        end_date,
                        price,
                        destination,
                        accomodations,
                        activity,
                        description
                    }
                )
            })

            const response = await res.json()

            if (response.returncode === 200) {

                alert(response.message);
                window.location.href = "/admin/dashboard";
            }
            else {
                alert(response.message);
            }
        }
        catch (error) {
            alert(error.message);
        }
    }


    return (
        <section className="pt-[15dvh] w-[100dvw] h-auto text-[--text-dark] p-6">
            <div className="flex justify-center items-center text-3xl font-bold pb-10">
                Add Package
            </div>
            <form className="max-w-sm mx-auto flex flex-col gap-4 rounded-2xl border border-[--text-dark] p-10" encType="multipart/form-data" onSubmit={onSubmit} >
                <div id="package-name">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                        Package Name
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md">
                            <IoMdLocate />
                        </span>
                        <input
                            type="text"
                            id="name"
                            className="rounded-none outline-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                            placeholder="eg; Monsoon Package"
                        />
                    </div>
                </div>
                <div id="package-type">
                    <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">
                        Package Type
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md">
                            <BiCollection />
                        </span>
                        <input
                            type="text"
                            id="type"
                            className="rounded-none outline-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                            placeholder="eg; Hilly, Waterfall"
                        />
                    </div>
                </div>
                <div id="package-start">
                    <label htmlFor="start" className="block mb-2 text-sm font-medium text-gray-900">
                        Start Date
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md">
                            <FaCalendarDay />
                        </span>
                        <input
                            type="date"
                            id="start"
                            className="rounded-none outline-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                        />
                    </div>
                </div>
                <div id="package-end">
                    <label htmlFor="end" className="block mb-2 text-sm font-medium text-gray-900">
                        End Date
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md">
                            <FaCalendarDay />
                        </span>
                        <input
                            type="date"
                            id="end"
                            className="rounded-none outline-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                        />
                    </div>
                </div>
                <div id="package-price">
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
                        Price
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md">
                            <RiMoneyRupeeCircleFill />
                        </span>
                        <input
                            type="number"
                            min={0}
                            step={0.01}
                            id="price"
                            className="rounded-none outline-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                            placeholder="eg; 1000.00"
                        />
                    </div>
                </div>
                <div id="package-destination">
                    <label htmlFor="destination" className="block mb-2 text-sm font-medium text-gray-900">
                        Destination
                    </label>
                    <div className="flex ">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md">
                            <IoLocationSharp />
                        </span>
                        <select
                            id="destination"
                            className="rounded-none outline-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                        >
                            <option value=""> -- Select Destination -- </option>
                            {
                                destination.map((items) => (
                                    <option key={items.id} value={items.id}>{items.Name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div id="package-accomodation">
                    <label htmlFor="accomodation" className="block mb-2 text-sm font-medium text-gray-900">
                        Accomodation
                    </label>
                    <div className="flex ">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md">
                            <FaHotel />
                        </span>
                        <select
                            id="accomodation"
                            className="rounded-none outline-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                        >
                            <option value=""> -- Select Accomodation -- </option>
                            {
                                accommodation.map((items) => (
                                    <option key={items.id} value={items.id}>{items.Name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div id="package-activities">
                    <label htmlFor="activities" className="block mb-2 text-sm font-medium text-gray-900">
                        Activities
                    </label>
                    <div className="flex ">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md">
                            <GiHiking />
                        </span>
                        <select
                            id="activities"
                            className="rounded-none outline-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                        >
                            <option value=""> -- Select Activities -- </option>
                            {
                                activities.map((items) => (
                                    <option key={items.id} value={items.id}>{items.Name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div id="package-description">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
                        Description
                    </label>
                    <div className="flex ">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md">
                            <MdDescription />
                        </span>
                        <textarea
                            id="description"
                            className="rounded-none outline-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                            placeholder="eg; Mumbai, Maharashtra"
                        />
                    </div>
                </div>
                <div id="submit">
                    <button type="submit" className="bg-[--button-color] rounded-2xl text-white px-6 py-3">
                        Add
                    </button>
                </div>
            </form>

        </section>
    )
}
