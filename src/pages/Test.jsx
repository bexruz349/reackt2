import React, { useEffect, useState } from 'react';
import { AppButton } from '../components/AppButton';

export const Test = () => {
    const[count,setCount]=useState(0)
    const [count2,setCount2]= useState(0)
    useEffect(()=>{
        console.log(count2);
    },[count])

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center",height:"100vh"}}>
            <h1>{count}</h1>
            <div >
                <button onClick={()=>{setCount(count+10)}}>increment</button>
                <button onClick={()=>{setCount(count-10)}} >decrement</button>
            </div>
            <h1>{count2}</h1>
            <div >
                <button onClick={()=>{setCount2(count2+10)}}>increment</button>
                <button onClick={()=>{setCount2(count2-10)}} >decrement</button>
            </div>
        </div>
    );
};
