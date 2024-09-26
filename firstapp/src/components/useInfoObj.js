import { useState } from "react";

function UserInfoObj() {
    const[user,setUser]=useState({name:'',email:''});
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setUser({...user,[name]:value});
    }
    const handleSubmit=()=>{
        alert("name :"+user.name+" "+user.email);
    }

    return ( <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={user.name} onChange={handleChange}/>
            <input type="email" name="email" value={user.email} onChange={handleChange}/>
        <button type="onsubmit">Submit</button>
        </form>
    </div> );
}

export default UserInfoObj;