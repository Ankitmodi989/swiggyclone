import RestInfo from "./RestInfo"
import React from "react"
import { useState } from "react"

export default function MenuCard({menuItems,buton}){

    const[Isopen,SetIsopen]=useState(true);

     if("categories" in menuItems){
        return(
            <div className="w-full">
            <p className="text-2xl font-bold">{menuItems.title}</p>
            <div>
                {
                    menuItems?.categories?.map((items)=> <MenuCard key={items?.title} menuItems={items} buton={buton}></MenuCard>)
                }
            </div>
            </div>
        )
    }

    if(!Isopen){
        return(
            <>
           <div className="flex justify-between w-full">
            <p className="font-bold text-2xl">{menuItems?.title}</p>
            <button className="font-bold text-2xl " onClick={()=>SetIsopen(!Isopen)}>{Isopen?'^':'v'}</button>
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
            </>
        )
    }

    if(buton==='veg'){
            return(
                <div className="w-full">
                <div className="flex justify-between w-full">
                <p className="font-bold text-2xl ">{menuItems.title}</p>
                <button className="font-bold text-2xl " onClick={()=>SetIsopen(!Isopen)}>{Isopen?'^':'v'}</button>
                </div>
                <div>
                    {
                        menuItems?.itemCards?.filter((food)=> "isVeg" in food?.card?.info).map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                    }
                </div>
                <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
            </div>
            )
        }
        
         if(buton==='non-veg'){
                return(
                    <div className="w-full">
                    <div className="flex justify-between w-full">
                    <p className="font-bold text-2xl">{menuItems.title}</p>
                    <button className="font-bold text-2xl " onClick={()=>SetIsopen(!Isopen)}>{Isopen?'^':'v'}</button>
                    </div>
                    <div>
                        {
                            menuItems?.itemCards?.filter((food)=> !("isVeg" in food?.card?.info)).map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                        }
                    </div>
                    <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
                </div>
                )
            }

    return(
        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="font-bold text-2xl">{menuItems?.title}</p>
            <button className="font-bold text-2xl " onClick={()=>SetIsopen(!Isopen)}>{Isopen?'^':'v'}</button>
            </div>
            <div>
            {
            menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
            }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
    )
}