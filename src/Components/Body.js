import { useEffect, useState } from "react";
import RestaurantCard, { withVegLabel } from "./RestaurantCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body=()=>{
console.log("Body");
    const [resList,setResList]=useState([]);
    const [text,setText]=useState("");
    const [filterRes,setFilterRes]=useState([]);
    console.log(filterRes[0]?.info.isOpen);

    const RestaurantCardVeg = withVegLabel(RestaurantCard);



    
    

    useEffect(()=>{
        console.log("We are fetching")
        fetchData();

    },[]);
    
    const fetchData=async ()=>{
        console.log("fetchData")
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3670355&lng=79.4304381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData=await data.json();
       setResList(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilterRes(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return <h1>Not Working</h1>
    }
    
    return resList.length===0?<Shimmer/>:(
        <div className="container-cart">
            <div className="filter flex items-center">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black"  value={text} onChange={(e)=>setText(e.target.value)}/>
                    <button className="px-4  bg-green-100 mx-4 rounded-xl" onClick={()=>{ 
                        const filterRestaurants=resList.filter((res)=>res?.info?.name?.toLowerCase().includes(text.toLowerCase()));
                        setFilterRes(filterRestaurants);
                        


                       
                    }}>Search</button>
                </div>
                <div>
                  <button onClick={()=>{
                    const filterRestaurants=resList.filter((res)=>res.info.avgRating>4);
                    setFilterRes(filterRestaurants);
                   
                     
                  }} className="my-1 bg-red-100 rounded-md">Top Rated Restaurant</button>
                  </div>
            </div>
    
            
            <div className="res-container flex flex-wrap">
                {
                    filterRes.map(resCard=><Link key={resCard.info.id} to={"/restaurant/"+resCard.info.id}>
                        {resCard.info.isOpen ? <RestaurantCardVeg resObj={resCard}/>:<RestaurantCard resObj={resCard}/>} 
                        </Link>)
                }

                

            </div>
        </div>

    )
}
export default Body