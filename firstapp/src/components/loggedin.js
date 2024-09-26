function LoggedIn() {
    let loggedin=true;
    return ( 
        <button >{loggedin?"LoggedIn":"LoggedOut"}</button>
     );
}

export default LoggedIn;