function NumberList() {
    const nums=[1,2,3,4,5,6,7];
    const list=nums.map((n)=>
        <li key={n.toString}>{n}</li>)

    return ( 
        <ul>{list}</ul>
     );
}

export default NumberList;