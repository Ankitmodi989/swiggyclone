import React from "react";
import { imageGridCards } from "./FoodData";
import FoodCard from "./FoodOption";



export default function Main(){

    return (
        <div className="w-[80%] container mx-auto mt-20 flex flex-col gap-6 overflow-x-auto">
            <div className="flex flex-nowrap gap-3 ">
                {imageGridCards.slice(0, 10).map((foodData) => (
                    <FoodCard key={foodData.id} foodData={foodData} />
                ))}
            </div>
            <div className="flex flex-nowrap gap-3 ">
                {imageGridCards.slice(10, 20).map((foodData) => (
                    <FoodCard key={foodData.id} foodData={foodData} />
                ))}
            </div>
        </div>
    );
   
}
