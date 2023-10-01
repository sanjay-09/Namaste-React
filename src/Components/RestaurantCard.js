import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
    console.log("rescard");
    const{resObj}=props;
    const {name,cuisines,avgRating,cloudinaryImageId}=resObj.info;
    
    
    return(
        <div className="p-4 m-4 w-[260px] h-[370px] bg-slate-100 rounded-lg hover:bg-gray-300">
            <img className="w-[220px] h-[200px] rounded-lg" src={CDN_URL+cloudinaryImageId} alt="NF" />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <p>{cuisines.join(",")}</p>
            <h4>{avgRating}</h4> 
            <h4>{resObj.info.sla.deliveryTime+"min"}</h4>
        

        </div>
    )
} 

export const withVegLabel=(RestaurantCard)=>{
    return (props)=>{
        return (
        <div>
            <label className="absolute bg-black text-white p-2 m-2 rounded-xl">Open</label>
            <RestaurantCard resObj={props.resObj}/>
        </div>
        )
    }
    
}
export default RestaurantCard