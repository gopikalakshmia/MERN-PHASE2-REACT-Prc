import { useState } from "react";

function Toggle() {
    const[toggle,setToggle]=useState(false);
    return ( <div>
        <p>{toggle?'OFF':'ON'}</p>
        <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
    </div> );
}

export default Toggle;