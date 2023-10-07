import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
const ItemList=(props)=>{
    const {items}=props;
    console.log(items);
    const dispatch=useDispatch();
    return(
        <div>
            
                {
                    items?.map((item)=><div key={item?.card?.info?.id}>
                       <div className="flex justify-between bg-slate-300 m-4 p-8 rounded-lg items-center">
                        <div>
                        <p className="text-left font-bold">{item.card.info.name}</p>
 
                        <p className="text-left">रु{item.card.info.price/100}</p>
                        </div>
                        <div>
                        <img  src={CDN_URL+item.card.info.imageId} className="w-22 h-20" alt="" />
                        <div className="absolute">
                            <button className="text-white shadow-lg p-right-2 rounded-md text-center w-22 bg-blue-500" onClick={()=>{dispatch(addItems(item))}}>Add +</button>
                            </div>
                        
                        </div>
                        
                       </div>
                    
                    
                    </div>
                    
                    
                    
                    
                    )
                }
            

        </div>
    )
}

export default ItemList;