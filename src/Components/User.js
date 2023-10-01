import {useEffect, useState} from "react"
import useData from "../utils/useData";
const User=()=>{
    console.log("user render");
    const name=useData();
    console.log(name);

  

   


    


    return(
        <div className="user-card">
           <h3>Name:{name}</h3>
           
        </div>
    )
}
export default User;