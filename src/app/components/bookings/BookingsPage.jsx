import { useEffect, useState } from "react";
import { MdTour } from "react-icons/md";
import { LiaHotelSolid } from "react-icons/lia";
import { RiRunLine } from "react-icons/ri";
export default function BookingsPage() {

	const BookingAdd = async() =>{
		const user_id = sessionStorage.getItem('user_id');
		const package_id = sessionStorage.getItem('package_id');
		
		
        if (user_id==='' || package_id==='' || user_id===null || package_id===null || user_id===undefined || package_id===undefined) {
            alert('Invalid Values Please fill the form then submit');
        }

        try {


            const res = await fetch('/api/bookings', {
                method: 'POST',
                body: JSON.stringify(
                    {
                        user_id,
						package_id
                    }
                )
            })

            const response = await res.json()

            if (response.returncode === 200) {

                alert(response.message);
				sessionStorage.setItem('package_id', '');
                window.location.href = "/";
            }
            else {
                alert(response.message);
            }
        }
        catch (error) {
            alert(error.message);
        }
	}

	const formatDate = (datetime) => {
		const date = new Date(datetime);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${day}/${month}/${year}`;
	}
	const [data, setData] = useState([]);

	useEffect(() => {

		const fetchData = async () => {
			try {
				const package_id = window.sessionStorage.getItem('package_id');
				const res = await fetch('/api/packages/fetch', {
					method: 'POST',
					body: JSON.stringify({ 'id': package_id })
				})

				const response = await res.json();

				setData(response.output);

			}
			catch (error) {
				alert(error.message);
			}


		}

		fetchData();

	}, []);

	return (
		<section className="w-[100dvw] h-auto pt-[15dvh]">
			<div className="flex justify-center items-center">
				{
					data.map((items) => (
						<div key={items.id} className="w-[80dvw] flex flex-col">
							<div id="package-name">
								<h1 className="text-2xl font-semibold">
									{items.Name}
								</h1>
							</div>
							<div className="flex flex-col lg:flex-row gap-4 pt-4" id="image">
								{items.Destination.Image.map((image) => (
									<div key={image.id} className="lg:w-[50%] rounded-lg transition-all duration-700 hover:bg-black">
										<img src={image.url} className="rounded-lg shadow-lg shadow-gray-400 hover:opacity-60" />
									</div>
								))}
								<div className="lg:w-[50%] rounded-lg border border-gray-200 shadow-lg shadow-gray-400 p-6 flex flex-col gap-4">
									<div id="price-type" className="flex justify-between">
										<h1 className="md:text-xl flex items-center text-base font-semibold">
											₹ {items.Price}
										</h1>
										<h1>
											{
												items.Type === "Hilly" ? (
													<span className="p-1.5 text-sm font-bold uppercase tracking-wider bg-green-300 text-green-800 rounded-lg bg-opacity-80">
														{items.Type}
													</span>
												) : items.Type === "Tourism" ? (
													<span className="p-1.5 text-sm font-bold uppercase tracking-wider bg-yellow-300 text-yellow-800 rounded-lg bg-opacity-80 flex justify-center items-center gap-2">

														<MdTour className="md:block hidden" /> {items.Type}

													</span>
												) : items.Type === "Hiking" ? (
													<span className="p-1.5 text-xs font-bold uppercase tracking-wider bg-red-300 text-red-800 rounded-lg bg-opacity-80">
														{items.Type}
													</span>
												) : items.Type === "Waterfall" ? (
													<span className="p-1.5 text-sm font-bold uppercase tracking-wider bg-blue-300 text-blue-800 rounded-lg bg-opacity-80">
														{items.Type}
													</span>
												) : (
													<span className="p-1.5 text-sm font-bold uppercase tracking-wider bg-gray-300 text-gray-800 rounded-lg bg-opacity-80">
														{items.Type}
													</span>
												)
											}
										</h1>
									</div>
									<div id="dates" className="border rounded-lg border-gray-500 overflow-hidden flex flex-col md:flex-row text-xs">
										<div className="md:w-[50%] h-full  md:border-r border-gray-500 p-4">
											<h1 className="font-bold uppercase">check-in</h1>
											<p className="text-sm">{formatDate(items.StartDate)}</p>
										</div>
										<div className="bg-gray-500 h-[0.2dvh] block md:hidden"></div>

										<div className="md:w-[50%] h-full p-4">
											<h1 className="font-bold uppercase">check-out</h1>
											<p className="text-sm">{formatDate(items.EndDate)}</p>
										</div>
									</div>
									<button type="submit" onClick={BookingAdd} className="bg-purple-500 text-center cursor-pointer text-white p-2 font-bold rounded-lg">
											Reserve
									</button>
									<div className="flex justify-center">
										<p className="text-gray-700 font-light">You won't be charged yet.</p>
									</div>
									<div className="bg-gray-400 h-[0.2dvh]"></div>
									<div>
										<p className="text-sm font-light text-gray-700">
											<span className="font-semibold">Package Description:</span> {items.Description}
										</p>
									</div>
								</div>
							</div>
							<div className="pt-10 flex flex-col gap-6">
								<div id="destination" className="text-xl font-medium flex flex-col gap-2">
									<h1>{items.Destination.Name}, {items.Destination.Country}</h1>
									<p className="font-normal text-sm text-gray-800">{items.Destination.Description}</p>
								</div>
								<div className="bg-gray-300 h-[0.2dvh]"></div>
								<h1 className="text-xl font-semibold">Services Included</h1>
								<div id="accommodation" className="flex flex-wrap gap-6">
									<div className="p-4 flex items-center gap-6">
										<div className="text-2xl scale-150 text-gray-800">
											<LiaHotelSolid />
										</div>
										<div>
											<h1 className="font-semibold flex gap-6 items-center">Accommodation Service</h1>
											<p className="text-gray-600 text-sm">{items.Accomodations.Name}</p>
										</div>
									</div>
									<div className="p-4 flex items-center gap-6">
										<div className="text-2xl scale-150 text-gray-800">
											<RiRunLine />
										</div>
										<div>
											<h1 className="font-semibold flex gap-6 items-center">Activity Included</h1>
											<p className="text-gray-600 text-sm">{items.Activity.Name}</p>
										</div>
									</div>

								</div>
							</div>

						</div>


					))

				}
			</div>
		</section>
	);
}

