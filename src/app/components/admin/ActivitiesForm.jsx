import { IoLocationSharp } from "react-icons/io5";
import { IoMdLocate } from "react-icons/io";
import { MdDescription } from "react-icons/md";
import { useState, useEffect } from "react";

export default function ActivitiesForm()
{
    const [data, setData] = useState([]);

    useEffect(() => 
    {

		const fetchdata = async () => {
			const res = await fetch("/api/destinations/fetch");
            const response = await res.json()
            setData(response.output);
		}

		fetchdata();
	}, []);

    const onSubmit = async(event) => 
	{
		event.preventDefault();

		const name = event.target.name.value;
		const destination = event.target.destination.value;
		const description = event.target.description.value;


		if(
            name==='' ||  destination==='' ||  description==='' ||
            name===null  || destination===null || description===null ||
            name===undefined ||  destination===undefined || description===undefined 
        ) 
		{
			alert('Invalid Values Please fill the form then submit');
		}

		try 
		{
			

			const res = await fetch('/api/activities/insert', {
				method: 'POST',
				body: JSON.stringify(
                    {
                        name,
                        destination,
                        description
                    }
                )
			})

			const response = await res.json()
			
			if(response.returncode === 200) 
			{

				alert(response.message);
                window.location.href="/admin/dashboard";
			}
			else
			{
				alert(response.message);
			}
		} 
		catch (error) 
		{
            alert(error.message);
		}
	}


    return(
        <section className="pt-[15dvh] w-[100dvw] h-auto text-[--text-dark] p-6">
            <div className="flex justify-center items-center text-3xl font-bold pb-10">
                Add Activity
            </div>
            <form className="max-w-sm mx-auto flex flex-col gap-4 rounded-2xl border border-[--text-dark] p-10" encType="multipart/form-data" onSubmit={onSubmit} >
                <div id="activity-name">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                        Activity Name
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md">
                            <IoMdLocate />
                        </span>
                        <input 
                            type="text" 
                            id="name" 
                            className="rounded-none outline-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5" 
                            placeholder="eg; Hiking, River Rafting"
                        />
                    </div>
                </div>
                <div id="activity-destination">
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
                                data.map((items)=>(
                                    <option key={items.id} value={items.id}>{items.Name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div id="activity-description">
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