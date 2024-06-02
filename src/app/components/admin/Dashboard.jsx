import Destination from "./fetch/Destination";
import Accomodations from "./fetch/Accomodations";
import Activities from "./fetch/Activities";
import Packages from "./fetch/Packages";
export default function Dashboard() 
{
   


    return (
        <section className="w-[100dvw] h-auto pt-[10dvh] text-[--text-dark]">
            <Destination/>
            <Accomodations/>
            <Activities/>
            <Packages/>
        </section>
    )
}

