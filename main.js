import App from "./index"
import Restaurant from "./component/Restaurant";
import { BrowserRouter,Route,Routes } from "react-router";
import RestCard from "./component/Resrcard";

import ReactDOM from "react-dom/client";
import RestaurantMenu from "./component/RestaurantMenu";

function Swiggy(){
   return(
      <>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<App></App>}  > </Route>
         <Route path="/Resturant" element={<Restaurant></Restaurant>}></Route>
         <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
       
      </Routes>
      
      </BrowserRouter>
    </>
   )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Swiggy></Swiggy>)

