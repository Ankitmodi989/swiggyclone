import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Main from "./component/body";
import GroceryOption from "./component/Groceryoption";
import Dineoption from "./component/Dineoption";
import Footer from "./component/Footer";


export default function App(){
   return(
    <>
    <Header></Header>
    <Main></Main>
    <GroceryOption></GroceryOption>
    <Dineoption></Dineoption>
    <Footer></Footer>
  
    </>
   )
}

