import { useState } from "react";

const Counter = () =>{
    const [count, setCount] = useState(0);

    const handleInc =() =>{
        setCount(count + 1)
    }
    const handleDec = () =>{
        setCount(count - 1)
    }
    return(<div>
        <h1>Counter App</h1>
        <p>counter: {count}</p>
       <div>
       <button onClick={handleInc}>Increment</button>
       <button onClick={handleDec}>Decrement</button>
       </div>
    </div>)
}

export default Counter;