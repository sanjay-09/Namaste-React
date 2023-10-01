import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResCategory from "../ResCategory";

const RestaurantMenu=()=>{
    const [ResInfo,setResInfo]=useState(null);
    const {resId}=useParams();
    const [showIndex,setShowIndex]=useState(-1);



    useEffect(()=>{
        resFeed();

    },[]);
    const resFeed=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.3670355&lng=79.4304381&restaurantId="+resId);
        const jsonData=await data.json();
        setResInfo(jsonData);

    }
    if(ResInfo===null){
        return <Shimmer/>
    }
    const {name,cuisines,costForTwo,areaName}=ResInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards}=ResInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;
    const categories=ResInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    return(
        <div className="text-center">
            <h1 className="font-bold p-2 m-2 text-black-50 text-2xl bg-slate-100">{name}</h1>
            <div className="intro flex justify-center space-x-6 font-bold">
            <h2>{cuisines.join(",")}</h2>
            <h4>रु{costForTwo/100} for Two</h4>

            
            </div>
            <h4 className="font-bold">{areaName}, bareilly</h4>
            <div className="accordians ">
                { 

                    //this is a controller component because component is controlling  
                    categories.map((category,index)=><ResCategory key={category.card.card.itemCards.title} data={category.card.card} showItems={index===showIndex?true:false} setShowIndex={()=>{setShowIndex(index)}}/>)
                }

            </div>

            
            
        </div>
    )
}
export default RestaurantMenu;