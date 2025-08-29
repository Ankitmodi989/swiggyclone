import { restaurants } from "./DineData"
import Dinecard from "./Dinecard"
export default function Dineoption(){
    return(
        <div className="mt-15 container w-[80%] mx-auto ">
            <p className="text-2xl font-bold ">Discover best restaurants on Dineout</p>
        <div className="mt-7 flex flex-nowrap gap-5 overflow-x-auto ">
            {
            restaurants.map((foodata)=>
                <Dinecard key={foodata?.info?.id} foodata={foodata}/>
            )
        }
        </div>

        
        </div>
        
    )
};