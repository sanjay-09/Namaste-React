import {useEffect, useState} from "react"
import useData from "../utils/useData";
const User=()=>{
    console.log("user render");
    const name=useData();
    console.log(name);

  

   


    


    return(
        <div className="bg-slate-100 w-6/12 mx-auto my-2 p-2">
            <p className="font-bold p-2 m-2"> Hello this is Sanjay Singh.Currently Learning ReactJS and build this short application with ReactJS,using the power of Tailwind.We can scale this web app as I have used lazy loading of the components. </p>
            <h3 className="font-bold p-2 m-2">Further I am gone integrate with backend to store the real time data using the MongoDb primarily,also the Authentication will be included</h3>
        
        </div>
    )
}
export default User;