import React, {useState,} from "react"

function Counter(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={ () => {
                setCount(count-1)
                console.log(count)
            }}>
                -1
            </button>
            <button onClick={ () => {
                setCount(count+1)
                console.log(count)
            }}>
                +1
            </button>
        </div>
    )
}
export default Counter