import Image from "next/image";
export default function Destination()
{
    return (
        <section className="w-[100dvw] h-auto p-[10dvw]">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                    <h1 className="text-[--text-dark] text-3xl font-bold">
                        Explore top destinations
                    </h1>
                    <p className="text-[--text-dark] text-sm">
                        Explore your suitable and dream places around the world. Here you can find your right destination. 
                    </p>
                </div>
                <div className="w-[100%] h-auto md:h-[65dvh] gap-[5dvw] flex flex-col justify-center items-center md:flex-row">
                    <div className="md:w-[28%] h-auto cursor-pointer">                        
                        <Image
                            src="/destination_1.jpg"
                            width={500}
                            height={500}
                            className="rounded-3xl w-auto"
                            alt="Destination 1"
                        />
                        
                    </div>
                    <div className="md:w-[28%] h-auto cursor-pointer">
                        <Image
                            src="/destination_2.jpg"
                            width={500}
                            height={500}
                            className="rounded-3xl w-auto"
                            alt="Destination 2"
                        />
                        
                    </div>
                    <div className="md:w-[28%] h-auto cursor-pointer">
                        <Image
                            src="/destination_3.jpg"
                            width={500}
                            height={500}
                            className="rounded-3xl w-auto"
                            alt="Destination 3"
                        />
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
