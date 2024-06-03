import { useEffect, useState } from "react";
import { MdTour } from "react-icons/md";
import { FiHome } from "react-icons/fi";

export default function BookingsPage() {


	const formatDate = (datetime) => {
		const date = new Date(datetime);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${day}/${month}/${year}`;
	}
	const [data, setData] = useState({});

	useEffect(() => {

		const fetchData = async () => {
			try {
				const package_id = window.sessionStorage.getItem('package_id');
				const res = await fetch('/api/packages/fetch', {
					method: 'POST',
					body: JSON.stringify({ 'id': package_id })
				})

				const response = await res.json();

				if (response.returncode === 200) {
					console.log(response.output);
					setData(response.output);
					
				}
				else {
					alert(response.message);
					window.location.href = "/packages"
				}
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

					<div className="w-[80dvw] flex flex-col">
						<div id="package-name">
							<h1 className="text-2xl font-semibold">
								{data.Name}
							</h1>
						</div>
						<div className="flex gap-4 pt-4" id="image">
							{data.Destination.Image.map((image) => (
								<div className="w-[50%]">
									<img src={image.url} className="rounded-lg shadow-lg shadow-gray-400" />
								</div>
							))}
							<div className="w-[50%] rounded-lg border border-gray-200 shadow-lg shadow-gray-400 p-6 flex flex-col gap-4">
								<div id="price-type" className="flex justify-between">
									<h1 className="text-xl font-semibold">
										₹ {data.Price}
									</h1>
									<h1>
										{
											data.Type === "Hilly" ? (
												<span className="p-1.5 text-sm font-bold uppercase tracking-wider bg-green-300 text-green-800 rounded-lg bg-opacity-80">
													{data.Type}
												</span>
											) : data.Type === "Tourism" ? (
												<span className="p-1.5 text-sm font-bold uppercase tracking-wider bg-yellow-300 text-yellow-800 rounded-lg bg-opacity-80 flex justify-center items-center gap-2">

													<MdTour /> {data.Type}

												</span>
											) : data.Type === "Hiking" ? (
												<span className="p-1.5 text-sm font-bold uppercase tracking-wider bg-red-300 text-red-800 rounded-lg bg-opacity-80">
													{data.Type}
												</span>
											) : data.Type === "Waterfall" ? (
												<span className="p-1.5 text-sm font-bold uppercase tracking-wider bg-blue-300 text-blue-800 rounded-lg bg-opacity-80">
													{data.Type}
												</span>
											) : (
												<span className="p-1.5 text-sm font-bold uppercase tracking-wider bg-gray-300 text-gray-800 rounded-lg bg-opacity-80">
													{data.Type}
												</span>
											)
										}
									</h1>
								</div>
								<div id="dates" className="border rounded-lg border-gray-500 overflow-hidden flex text-xs">
									<div className="w-[50%] h-full border-r border-gray-500 p-4">
										<h1 className="font-bold uppercase">check-in</h1>
										<p className="text-sm">{formatDate(data.StartDate)}</p>
									</div>
									<div className="w-[50%] h-full p-4">
										<h1 className="font-bold uppercase">check-out</h1>
										<p className="text-sm">{formatDate(data.EndDate)}</p>
									</div>
								</div>
								<button className="bg-purple-500 text-white p-2 font-bold rounded-lg">
									Reserve
								</button>
								<div className="flex justify-center">
									<p className="text-gray-700 font-light">You won't be charged yet.</p>
								</div>
								<div className="bg-gray-400 h-[0.1dvh]"></div>
								<div>
									<p className="text-sm font-light text-gray-700">
										<span className="font-semibold">Package Description:</span> {data.Description}
									</p>
								</div>
							</div>
						</div>
						<div className="pt-10 flex flex-col gap-6">
							<div id="destination" className="text-xl font-medium flex flex-col gap-2">
								<h1>{data.Destination.Name}, {data.Destination.Country}</h1>
								<p className="font-normal text-sm text-gray-800">{data.Destination.Description}</p>
							</div>
							<div className="bg-gray-300 h-[0.1dvh]"></div>
							<div id="accommodation">
								<div className="p-4 flex gap-6">
									<div className="text-2xl font-thin">
										<FiHome/>
									</div>
									<div className="">
										<h1 className="font-semibold flex gap-6 items-center">Accommodation Service</h1>
										<p>{data.Accomodation.Name}</p>
									</div>
								</div>
								<div></div>
								<div></div>
							</div>
						</div>

					</div>


				}
			</div>
		</section>
	);
}

