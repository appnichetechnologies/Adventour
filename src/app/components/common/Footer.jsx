export default function Footer()
{
    return (
        <section className="w-[100dvw] h-auto pt-[10dvh]">
            <div className="bg-[--text-dark] text-white w-auto h-auto p-10 flex flex-col justify-center items-center gap-6">
                <div id="logo" className="pb-[5dvh] w-[80dvw]">
                    <p className="cursor-pointer font-bold text-2xl">
                        Adventour
                        <span className="text-[--primary-color]">.</span>
                    </p>
                    <p className="pt-4 text-sm">
                        Explore your suitable and dream places around the world. Here you can find your right destination. 
                    </p>
                </div>
                <div className="bg-gray-400 w-[85dvw] h-[0.1dvh]"></div>
                <div id="logo" className="pb-[5dvh] w-[80dvw] flex justify-center items-center flex-col">
                   
                    <p className="text-sm">
                        Copyright © 2024 Appniche Technologies. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}