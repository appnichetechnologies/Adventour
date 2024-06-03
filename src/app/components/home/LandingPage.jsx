import Image from "next/image";
export default function LandingPage()
{
    return (
        <section className="w-[100dvw] h-auto md:h-[100dvh] flex flex-col justify-center items-center md:flex-row gap-6 md:gap-0">
            <div id="image" className="pt-[20dvh] md:pt-0 w-[50dvw] h-auto flex justify-center items-center">
                <Image 
                    src='/landing.jpg'
                    width={400}
                    height={600}
                    className="rounded-3xl shadow-2xl shadow-black w-[100%] md:w-[50%]"
                    alt="Landing Page"
                />
            </div>
            <div className="md:w-[50dvw] p-6 md:p-0 h-auto flex flex-col justify-center text-left items-center">
                <div id="content" className="md:w-[60%] w-auto flex flex-col gap-6 md:p-0">
                    <p className="w-auto text-[--primary-color] text-xl font-bold">Book Now</p>
                    <h1 className="md:text-5xl text-xl text-[--text-dark] font-black flex flex-col md:gap-6">The Smiling 😊<span>agent for travel</span></h1>
                    <p className="flex flex-wrap">
                        Make your travel more enjoyable with us. We are the best travel
                        agency and we are providing the best travel services for our
                        clients.
                    </p>
                    <div id="action-buttons" className="flex gap-8 font-bold text-sm">
                        <a href="/packages">
                            <button className="bg-[--button-color] rounded-2xl text-white px-6 py-3">
                                Plan Trip
                            </button>
                        </a>
                        <a href="/packages">
                            <button className="bg-[--button-color] rounded-2xl text-white px-6 py-3">
                                Book Trip
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
