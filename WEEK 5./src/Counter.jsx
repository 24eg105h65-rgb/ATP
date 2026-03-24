import { useState } from "react";

function Counter(){
    //state
    const [count,setCount]=useState(0);

    //function to modify the state
    const increment=()=>{
        setCount(count+1);

    };
    const decerment=()=>{
        setCount(count-1);
    };
    console.log("counter component");
    return(
        <div className="text-center p-10 border">
            <h1 className="text-6xl">count:{count}</h1>
        </div>
    )
}