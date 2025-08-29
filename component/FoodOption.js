export default function FoodCard({foodData}){

   
     return(
        <div className="flex-none">

        <a href={foodData?.action?.link}>
        <img className="w-35 h-45 " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
        </a>
       </div>
    )
  
}
