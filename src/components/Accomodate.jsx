import {useState, useEffect} from "react"
import useCounter from "./useCounter"
const MAX_CAPACITY = 10; // 10명
export default function Accomodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);
    useEffect(() => { 
        console.log("=================");
        console.log("isFull: ", isFull);
    })
    useEffect(() => { 
        setIsFull(count >= MAX_CAPACITY);
        console.log("count: ", count);
    }, [count])

    return (
    <div style={{ padding: 16 }}>
        <p>{"총 "+ count + "명 수용"}</p>        
        <button onClick={ () => {
            if(count < MAX_CAPACITY) increaseCount();
            }}>입장</button>
        <button onClick={decreaseCount}>퇴장</button>
        {isFull && <p> 정원이 가득찼습니다.</p> }
    </div>
    )
}

