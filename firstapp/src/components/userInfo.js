import { useState } from "react";

function UserInfo() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const handleSubmit=()=>{
        alert("Name submitted is :"+name+"email:"+email);
    }
    return ( <div>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={(e)=>setName(e.target.value)}/>
            <input type='email' onChange={(e)=>setEmail(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    </div> );
}

export default UserInfo;