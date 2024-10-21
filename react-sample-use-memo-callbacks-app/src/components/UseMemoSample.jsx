import React, {useState, useMemo } from "react";

function calculate() {
    let result = 0;
    for(let i=0; i < 1000000000; i++ ) {
        result += i;
    }
    return result;
}
const UseMemoSample = () => {
    const [count, setCount] = useState(0);

    // const value = calculate();
    const [dependentCount, setDependentCount] = useState(10);
    const value = useMemo(calculate, [dependentCount]);


    return (
        <>
        {console.log("component re renders")}
            <div className="App">
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
                <p>Count: {count}</p>
                <br></br>
                <button onClick={() => setDependentCount(dependentCount + 1)}>
                Increment Dependent Count
                </button>
                <p>Dependent Count: {dependentCount}</p>
            </div>
        </>
    )
}

export default UseMemoSample;