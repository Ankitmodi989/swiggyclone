import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router";

 
export default function Header(){
    return(
        <header className=" bg-orange-600 h-[100vh] ">
            <div className=" bg-orange-600  flex py-8 justify-between ">
                <img className="container m-auto" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="swiggy logo" style={{height:"48px", width:"160px"}}></img>
                <div className="flex gap-6 items-center ">
                <a href="swiggy.com" className="text-white text-1xl font-bold">Swiggy Coporate</a>
                <a href="swiggy.com" className="text-white text-1xl font-bold">Partner with us</a>
                
                    <a className="text-white text-1xl font-bold border-1 px-2 py-2 rounded-2xl cursor-pointer" >Get the App</a>
                    <a className="text-white text-1xl font-bold  px-6 py-3 bg-black rounded-2xl mr-30 cursor-pointer">Sign in</a>
                
                </div>

            </div>
            <div className=" py-9">
                <div className="text-center text-4xl font-bold text-white">
                    <h1>Order food & groceries. Discover <br></br>best restaurants. Swiggy it!</h1>
                </div>
                <div className="flex gap-6 justify-center mt-6">
                    <input type="search" placeholder="Enter your delivery location" className="text-[13px] bg-white w-50 h-10 rounded-[10px] px-3"></input>
                     <input type="search" placeholder="Search for resturants, items or more" className="text-[13px] bg-white w-90 h-10 rounded-[10px] px-3"></input>
                </div>
                <div className="flex justify-center  overflow-auto mt-6">
                   <Link to="/Resturant">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" className="h-80 w-80 cursor-pointer"></img>
                   </Link>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"  className="h-80 w-80 cursor-pointer"></img>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"  className="h-80 w-80 cursor-pointer"></img>
                </div>
            </div>
        </header>
    )
}