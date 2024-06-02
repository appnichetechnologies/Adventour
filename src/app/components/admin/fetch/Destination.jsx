import { useState, useEffect } from "react";
export default function Destination()
{
    const [data, setData] = useState([]);
    var count = 0

    useEffect(() => 
    {

		const fetchdata = async () => {
			const res = await fetch("/api/destinations/fetch");
            const dest = await res.json()
            setData(dest.output);
		}

		fetchdata();
	}, []);

    return (
        <div className="flex min-h-screen items-center justify-center bg-white">
            <div className="p-6 overflow-scroll px-0 flex flex-col gap-6">
                <div className="flex justify-between p-8">
                    <h1 className="text-2xl font-bold"> Destinations </h1>
                    <a href="/admin/destinations">
                        <button className="bg-[--button-color] rounded-2xl text-white px-6 py-3">
                            Add
                        </button>
                    </a>
                </div>
                <table className="w-full min-w-max table-auto text-left">
                    <thead className="">
                        <tr>
                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-12 py-4">
                                <p className="block antialiased font-sans font-bold text-sm text-blue-gray-900 leading-none opacity-70">
                                    Sr No.
                                </p>
                            </th>
                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-12 py-4">
                                <p className="block antialiased font-sans font-bold text-sm text-blue-gray-900 leading-none opacity-70">
                                    Image
                                </p>
                            </th>
                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-12 py-4">
                                <p className="block antialiased font-sans font-bold text-sm text-blue-gray-900 leading-none opacity-70">
                                    Name
                                </p>
                            </th>
                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-12 py-4">
                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-bold leading-none opacity-70">
                                    Country
                                </p>
                            </th>
                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-12 py-4">
                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-bold leading-none opacity-70">
                                    Region
                                </p>
                            </th>
                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-12 py-4">
                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-bold leading-none opacity-70">
                                    Description
                                </p>
                            </th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((items)=>(
                                <tr key={items.id}>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="flex justify-center items-center antialiased font-sans text-xl leading-normal text-blue-gray-900 font-bold">
                                            {count = count + 1}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <div className="flex flex-col items-center gap-3">
                                            {
                                                items.Image.map((img)=>(
                                                    <img
                                                        key={img.id}
                                                        src={img.url}
                                                        alt={items.Name}
                                                        className="inline-block relative object-center w-[40dvw] md:w-[10dvw] rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                                                    />
                                                ))
                                            }
                                        </div>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="flex justify-center items-center antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                                        {items.Name}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="flex justify-center items-center antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                                            {items.Country}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="flex justify-center items-center antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                                            {items.Region}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <div 
                                            className="antialiased flex flex-wrap font-sans text-sm leading-normal 
                                            text-gray-900 font-normal">
                                            <p className="w-[25dvw]">
                                                {items.Description}
                                            </p>
                                        </div>
                                        
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}