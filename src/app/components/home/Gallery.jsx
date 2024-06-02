import Image from "next/image";
export default function Gallery()
{
    return(
        <section className="w-[100dvw] h-auto py-[10dvw] flex flex-col md:flex-row md:gap-0 gap-[5dvh]">
            <div className="md:w-[50dvw] h-auto flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <Image
                        src="/gallery_1.jpg"
                        alt=""
                        width={500}
                        height={500}
                        className="w-[85%] rounded-3xl shadow-2xl shadow-gray-800"
                    />
                </div>
               <div className="flex flex-col gap-6 justify-center items-center">
                <div>
                        <Image
                            src="/gallery_2.jpg"
                            alt=""
                            width={500}
                            height={500}
                            className="w-[80%] rounded-3xl shadow-2xl shadow-gray-800"
                        />
                    </div>
                    <div>
                        <Image
                            src="/gallery_3.jpg"
                            alt=""
                            width={500}
                            height={500}
                            className="w-[80%] rounded-3xl shadow-2xl shadow-gray-800"
                        />
                    </div>
               </div>
            </div>
            <div className="md:w-[50dvw] h-auto flex items-center justify-center">
                <div className="text-[--text-dark] pr-[15dvw] flex flex-col gap-6 p-6">
                    <h1 className="font-semibold text-4xl">
                        Our trip gallery that will inspire you
                    </h1>
                    <div>
                        <p className="">
                        Explore your suitable and dream places around the world. Here you can find your right destination.  
                        </p>
                    </div>
                    <a href="">
                        <button className="bg-[--button-color] rounded-2xl text-white px-6 py-3">
                            View All
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}