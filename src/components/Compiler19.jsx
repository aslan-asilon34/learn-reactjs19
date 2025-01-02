import React, { useState } from 'react';


const Compiler19 = () => {
    const [count, setCount]=useState(0);


    const expensiveCalculation= count*2;


  return (
    <div>
        <h1>hasil react19 : {expensiveCalculation}</h1>
        <button onClick={()=>setCount(count+1)}>add</button>
    </div>
  )
}

export default Compiler19