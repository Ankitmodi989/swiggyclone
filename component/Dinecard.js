 export default function Dinecard({foodata}) {
    console.log(foodata);
    return (
        <div className="h-110">
        <div className="w-80 flex-none">
            <a href={foodata?.cta?.link}>
                <img className="h-45 w-80 rounded-t-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodata?.info?.mediaFiles[0]?.url} alt="Food" />
            </a>
            <div className="flex justify-between h-5">
            <p className="font-bold  text-[19px] relative  bottom-7 pl-2  text-white h-7 bg-linear-to-t from-red-950 ">{foodata?.info?.name}</p>
            <p className="font-bold text-[19px] relative bottom-7 mr-2 text-white">*{foodata?.info?.rating?.value}</p>
            </div>
        </div>
        <div style={{color:"#02060c99"}}>
            <div className="flex justify-between">
                <p className="font-bold text-[13px] ml-1">{foodata?.info?.cuisines[0]}*{foodata?.info?.cuisines[1]}</p>
                 <p className="font-bold text-[13px] mr-1">{foodata?.info?.costForTwo}</p>
            </div>
            <div className="flex justify-between h-6">
                <p className="font-bold text-[12px] ml-1">{foodata?.info?.locationInfo?.formattedAddress}</p>
                 <p className="font-bold text-[12px] mr-1">{foodata?.info?.locationInfo?.distanceString}</p>
            </div>
            <div className="relative top-4">
                <p className="font-bold text-[12px] ml-1 bg-[#f0f0f5] inline p-2 rounded-[10px] mt-10 ">{foodata?.info?.vendorHighlights[0]?.title}</p>
            </div>
            <div className="mt-10 w-[95%] ml-2">
                <p className="bg-[#1ba672] rounded-[6px]  text-[17x] font-bold p-2 " style={{color:"white"}}>{foodata?.info?.offerInfoV2?.otherOffers?.offers[0]?.header} {foodata?.info?.offerInfoV2?.otherOffers?.offers[0]?.dealCategory}     </p>
                <p className="bg-[#c8f9e5] rounded-[6px] text-[17x] font-serif mt-4 p-2"  style={{color:"green"}}>{foodata?.info?.customerOffer?.info?.description} </p>
            </div>
        </div>
        </div>
    );
}

