import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import {FcApproval} from "react-icons/fc"
import {AiFillCloseCircle} from "react-icons/ai"

const Header=()=>{
    console.log("Header render");
    const [btn,setBtn]=useState("logIn");
    const onlineStatus=useOnlineStatus();
    const data=useContext(UserContext);
    const {loggedInUser}=useContext(UserContext);
    //subscribing to the store using a selector
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);


    console.log(data);

    return(
        <div className="flex justify-between bg-pink-100">
            <div className="logo">
               <img className="w-40" src={LOGO_URL} alt="NF" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-10 m-2 justify-around">
                    <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
                    <li className="px-4">Online Status: {onlineStatus?<FcApproval className="inline"/>:<AiFillCloseCircle className="inline"/> }</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    {/* <li className="px-4"><Link to="/contact">Contact Us</Link></li> */}
                    <li className="px-4 mx-2 text-xl flex"><Link to="/Cart">🛒{cartItems.length}</Link></li>
        </ul>

            </div>
        </div>
    )
} 
export default Header;