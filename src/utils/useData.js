import { useEffect, useState } from "react"

const useData=()=>{
    const [name,setName]=useState("dummy");


    useEffect(()=>{
        fetchData()
         
     },[]);
      
 async function fetchData(){
     console.log("api");
     const data=await fetch("https://api.github.com/users/sanjay-09");
     const jsonData=await data.json();
     setName(jsonData.name);
 }
 return name;

}
export default useData;