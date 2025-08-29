import { GrocerGridCard } from "./groceryData";
import Grocerycard from "./Grocerycard";

export default function GroceryOption(){

    return(
             <div className="mt-20 w-[80%] container mx-auto ">
                <h1 className="text-2xl font-bold">Shop groceries on Instamart</h1>
                <div className=" container mx-auto flex flex-nowrap  overflow-x-auto mt-5 gap-3 ">
                        {
                            GrocerGridCard.map((foodData)=><Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>)
                        }
                      </div>
            </div>
        )
}