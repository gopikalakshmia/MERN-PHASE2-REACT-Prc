function NumList() {
    const num=[1,2,3,4,5];
    const list=num.map((n)=>(<li key={n.toString}>{n}</li>))
    return ( 
        <ul>
            {list}
        </ul>
     );
}

export default NumList;