import User from "./User";
import UserClass from "./UserClass";
import React from "react"

class About extends React.Component{
    constructor(props){
        super(props);
        
    }
    

 render(){
    
    
    return(
        <div>
        <h1>about</h1>
        <User/>
        {/* <UserClass name={"Sanjay Singh ClassBased"}/> */}
        </div>
    )
 }


}

export default About;