import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"Dummy Name",
            location:"dummy Location",
            img:"dummy url"
        }
       
    }
    async componentDidMount(){
        console.log("child component did mount");
          const data=await fetch("https://api.github.com/users/sanjay-09");
    
        const jsonData=await data.json();
        this.setState({
            name:jsonData.name,
            location:jsonData.location,
            img:jsonData.avatar_url
        })
        
       
    }
    componentDidUpdate(){
        console.log("Component Did Update");
    }
    componentWillUnmount(){
        console.log("component will unmount")
    }

    render(){
        
        const {name,location,img}=this.state;
        console.log(name);
        
        
        return(
            <div className="user-card">
                <img src={img} alt="Not found" />
            <h3>Name:{name}</h3>
            <h3>Location:{location}</h3>
            </div>
        )
        
    }
}
export default UserClass;