import React, { Suspense, lazy, useEffect,useState } from "react"
import ReactDOM from "react-dom/client"
import {
    createBrowserRouter,
    RouterProvider,Outlet
  } from "react-router-dom";
import Header from "./Components/Header"
import Body from "./Components/Body"
import Contact from "./Components/Contact"
import About from "./Components/About"
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";



const Grocery=lazy(()=>(import("./Components/Grocery.js")))


const App=()=>{
    const [user,setUser]=useState('');

    useEffect(()=>{
        const data={
            name:"Sanjay Singh"
        }
        setUser(data.name)
    },[]);
    return(
        <Provider store={appStore}> 

        <UserContext.Provider value={{loggedInUser:user,setUser}}>
        <div className="app">
        

           <Header/> 
        
           <Outlet/>

        </div>
        </UserContext.Provider>
        </Provider>
    )
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
    {
        path:"/",
        element:<Body/>
    },{
        path:"/about",
        element:<About/>
    },{
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/Grocery",
        element:<Suspense><Grocery/></Suspense>
    },
    {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
    },{
        path:"/Cart",
        element:<Cart/>
    }
    ],
    errorElement:<Error/>
  }]
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)