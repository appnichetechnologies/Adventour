import { useEffect, useState } from "react"

export default function PackageCard() {
	const [data, setData] = useState([]);

	useEffect(() => {

		const fetchData = async () => {
			const res = await fetch('/api/packages/fetch');
			const response = await res.json();
			setData(response.output);
		}

		fetchData();
	}, []);


	return (
		<section className="w-[100dvw] h-auto pt-[15dvh] p-6">
			<form encType="multipart/form-data">
				<div className="flex flex-wrap gap-6">
					{
						data.map((items) => (
							<a
								className="rounded-lg shadow-2xl shadow-gray-500 w-auto h-auto"
								key={items.id}
								onClick={()=>{sessionSetter(items.id)}}
								href="/bookings"
							>
								{
									items.Destination.Image.map((image) => (
										<div key={image.id} className="md:w-[25dvw] w-[80dvw]">
											<img
												src={image.url}
												alt={image.id}
												className="rounded-t-lg"
											/>
										</div>

									))
								}
								<div id="content" className="p-4 flex flex-col gap-2">
									<div className="flex justify-between gap-2 flex-wrap md:flex-row text-gray-800">
										<h1 className="font-semibold">
											{items.Destination.Name}, {items.Destination.Country}
										</h1>
										<span>
											{
												items.Type === "Hilly" ? (
													<span className="p-1.5 text-xs font-bold uppercase tracking-wider bg-green-300 text-green-800 rounded-lg bg-opacity-80">
														{items.Type}
													</span>
												) : items.Type === "Tourism" ? (
													<span className="p-1.5 text-xs font-bold uppercase tracking-wider bg-yellow-300 text-yellow-800 rounded-lg bg-opacity-80">
														{items.Type}
													</span>
												) : items.Type === "Hiking" ? (
													<span className="p-1.5 text-xs font-bold uppercase tracking-wider bg-red-300 text-red-800 rounded-lg bg-opacity-80">
														{items.Type}
													</span>
												) : items.Type === "Waterfall" ? (
													<span className="p-1.5 text-xs font-bold uppercase tracking-wider bg-blue-300 text-blue-800 rounded-lg bg-opacity-80">
														{items.Type}
													</span>
												) : (
													<span className="p-1.5 text-xs font-bold uppercase tracking-wider bg-gray-300 text-gray-800 rounded-lg bg-opacity-80">
														{items.Type}
													</span>
												)
											}

										</span>
									</div>
									<div id="description" className="font-light text-gray-600 flex flex-wrap">
										<p className="md:w-[20dvw] w-[65dvw] text-sm">
											{items.Description}
										</p>
									</div>
									<div id="price">
										<p className="text-red-500 text-base font-semibold">
											₹ {items.Price}
										</p>
									</div>
									<input type="hidden" value={items.id} id="package_id" />
								</div>
							</a>

						))
					}
				</div>
			</form>
		</section>
	)
}

const sessionSetter = (package_id) => {
	window.sessionStorage.setItem("package_id", package_id);
}
