import React, { useMemo, useState } from 'react';


const Compiler18 = () => {
    const [count, setCount]=useState(0);


    const expensiveCalculation=useMemo(()=>{
        console.log("expensive calculation")
        return count*2;
    },[count]);


  return (
    <div>
        <h1>hasil react18 : {expensiveCalculation}</h1>
        <button onClick={()=>setCount(count+1)}>add</button>

    </div>
  )
}

export default Compiler18