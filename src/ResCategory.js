import { useState } from "react";
import ItemList from "./Components/ItemList";
const ResCategory=(props)=>{

    const {data}=props;
    const {showItems}=props;
    const {setShowIndex}=props;
    const {itemCards}=data;
    const handleClick=()=>{
        setShowIndex();  
                 
    }
    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-large">{data.title} ({itemCards.length})</span>
                <span>🔽</span>
                </div>
              { showItems&&<ItemList items={itemCards}/>} 

                
            </div>
            
        </div>

    )
}
export default ResCategory;



