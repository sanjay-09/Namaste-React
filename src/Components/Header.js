import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    console.log("Header render")
    const [btn,setBtn]=useState("logIn");
    const onlineStatus=useOnlineStatus();
    return(
        <div className="flex justify-between bg-pink-100">
            <div className="logo">
               <img className="w-40" src={LOGO_URL} alt="NF" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-10 m-2 justify-around">
                    <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
                    <li className="px-4">Online Status: {onlineStatus?"Working":"Not Working" }</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={()=>{
                        btn==="logIn"?setBtn("LogOut"):setBtn("logIn");
                         
                    }}>{btn}</button>
                </ul>

            </div>
        </div>
    )
} 
export default Header;