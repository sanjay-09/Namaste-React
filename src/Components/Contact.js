import { useState, useEffect } from "react";
import User from "./User";

const Contact=()=>{
    console.log("contact render");
  const [count,setCount]=useState(0);

    return(
        <div>
        <h1>It is a contact us page</h1>
        <h2>Count:{count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <User/>

        </div>
    )
}
export default Contact;