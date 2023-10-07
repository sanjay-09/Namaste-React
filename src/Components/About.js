import User from "./User";
import UserClass from "./UserClass";
import React from "react"
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);
        
    }
    

 render(){
    
    
    return(
        <div>
    
        <div>
            <UserContext.Consumer>
                {(data)=>{console.log(data)}}
            </UserContext.Consumer>
            
        </div>
        <User/>
        {/* <UserClass name={"Sanjay Singh ClassBased"}/> */}
        </div>
    )
 }


}

export default About;