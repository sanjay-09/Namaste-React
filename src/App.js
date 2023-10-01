import React, { Suspense, lazy } from "react"
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



const Grocery=lazy(()=>(import("./Components/Grocery.js")))


const App=()=>{
    return(
        <div className="app">
           <Header/> 
           <Outlet/>

        </div>
    )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
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
    }
    ],
    errorElement:<Error/>
  }]
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)