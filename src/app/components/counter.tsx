"use client"
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";

export const Counter = () =>{
    const {isLoaded, userId} = useAuth();
    const [count,setCount] = useState(0);

    if(!isLoaded || !userId ) return null;
    console.log('counter component');

    return(
        <div>
            <button onClick={()=>setCount(count+1)}> clicked {count} times</button>
        </div>
    )
}