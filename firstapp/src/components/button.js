function Button() {

    const handleClick=()=>{
        alert("Button is clicked");
    }
    return ( 
        <button onClick={handleClick}>Click Me</button>
     );
}

export default Button;