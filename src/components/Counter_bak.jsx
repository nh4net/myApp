import React, { useState, useMemo } from "react"

export default function Counter(props) {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
  
    const slowSquare = (num) => {
        console.log("계산중..."); let result = 0;
        for(let i=0; i<2500000000; i++) {
            result = num*num;
        }
        return result;
    }
    const squared = useMemo(()=> slowSquare(number), [number] )
    
    return (
    <div>
        <input
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
        />
        <p>제곱결과: {squared}</p>

        <p>{count}</p>       
        <button onClick={ () => {        
            setCount(count+1);              
        }}>+1</button>   
    </div>
    )
}