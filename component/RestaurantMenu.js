import React from "react";
import { useParams } from "react-router";
import { useState,useEffect } from "react";
import MenuCard from "./MenuCard";

function RestaurantMenu() {

    let { id } = useParams();
    console.log(id);

    const [RestData, setRestData] = useState([]);
    const[buton,setbutton]=useState(null);

    useEffect(()=>{
    
        async function fetchData() {
           
           const proxyServer = "https://cors-anywhere.herokuapp.com/"
           const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json();
           const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
           setRestData(filterData);
        }
   
        fetchData();
       },[])

       console.log(RestData);

    return (

        <>
        
             <div className="w-[80%] mx-auto mt-20">
              <div className="flex justify-between w-[25%] mb-5">
          <button
            className={`h-10 w-30 rounded-2xl font-bold cursor-pointer ${buton==='veg' ? "bg-green-600" : "bg-gray-400"}`}
            onClick={()=>setbutton(buton==='veg'?null:'veg')}
          >
            veg
          </button>
          <button className={`h-10 w-30 rounded-2xl font-bold cursor-pointer ${buton==='non-veg' ? "bg-red-600" : "bg-gray-400"}` } onClick={()=>setbutton(buton==='non-veg'?null:'non-veg')}>Non-veg</button>
        </div>
                      {
                        RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card } buton={buton}></MenuCard>)
                      }
                    </div>
        </>
    );

}

export default RestaurantMenu;