import { IoLocationSharp } from "react-icons/io5";
import { IoMdLocate } from "react-icons/io";
import { FaMapLocation } from "react-icons/fa6";
import { MdDescription } from "react-icons/md";
import { useState } from "react";

export default function DestinationsForm() {
    const [file, setFile] = useState();

    const onSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            alert('No File Selected, Please select a file to proceed.');
        }

        const destination_name = event.target.name.value;
        const country = event.target.country.value;
        const region = event.target.region.value;
        const description = event.target.description.value;


        if (
            destination_name === '' || country === '' || region === '' || description === '' ||
            destination_name === null || country === null || region === null || description === null ||
            destination_name === undefined || country === undefined || region === undefined || description === undefined
        ) {
            alert('Invalid Values Please fill the form then submit');
        }

        try {
            const data = new FormData();
            data.set('image', file);
            data.set('name', destination_name);
            data.set('country', country);
            data.set('region', region);
            data.set('description', description);

            const res = await fetch('/api/destinations/insert', {
                method: 'POST',
                body: data
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

    const handleFileChange = (event) => {
        setFile(event.target.files?.[0]);
        const fileName = event.target.files[0]?.name || 'No file selected';
        document.getElementById('file-name').innerText = fileName;
        console.log(file);
    }

    return (
        <section className="pt-[15dvh] w-[100dvw] h-auto text-[--text-dark] p-6">
            <div className="flex justify-center items-center text-3xl font-bold pb-10">
                Add Destination
            </div>
            <form className="max-w-sm mx-auto flex flex-col gap-4 rounded-2xl border border-[--text-dark] p-10" encType="multipart/form-data" onSubmit={onSubmit} >
                <div id="destination-name">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                        Name of the Destination
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md">
                            <IoLocationSharp />
                        </span>
                        <input
                            type="text"
                            id="name"
                            className="rounded-none outline-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                            placeholder="eg; Taj Mahal, Venice"
                        />
                    </div>
                </div>
                <div id="destination-country">
                    <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">
                        Country
                    </label>
                    <div className="flex ">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md">
                            <IoMdLocate />
                        </span>
                        <input
                            type="text"
                            id="country"
                            className="rounded-none outline-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                            placeholder="eg; India, Italy"
                        />
                    </div>
                </div>
                <div id="destination-region">
                    <label htmlFor="region" className="block mb-2 text-sm font-medium text-gray-900">
                        Region
                    </label>
                    <div className="flex ">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md">
                            <FaMapLocation />
                        </span>
                        <input
                            type="text"
                            id="region"
                            className="rounded-none outline-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                            placeholder="eg; Mumbai, Maharashtra"
                        />
                    </div>
                </div>
                <div id="destination-description">
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
                <div id="destination-image">
                    <label htmlFor="region" className="block mb-2 text-sm font-medium text-gray-900">
                        Image
                    </label>
                    <div className="flex flex-col items-center justify-center gap-4 w-full">
                        <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span></p>
                                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
                            </div>
                        </label>
                        <input
                            id="image"
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <div className="w-[100%]">
                            <label id="file-name" className="text-left text-sm text-gray-500">No File Selected, Please select one</label>
                        </div>
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
