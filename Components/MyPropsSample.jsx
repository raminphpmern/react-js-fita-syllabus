import React, { useState } from "react";
import PropsReceive from "./PropsRecieve";

const MyPropsSample = () => {
    // const [change, setChange] = useState(true);
    const [change, setChange] = useState(false);
    const [props1, setProps1] = useState("Welcome to Fita");
    const [props2, setProps2] = useState("Welcome to React Class");
    return (
        <div>
            <button onClick={() => setChange(!change)}>
                Click Here!
            </button>
            {change ? (
                <PropsReceive data1={props1} />
            ) : (
                <PropsReceive data2={props2} />
            )}
        </div>
    );
};
export default MyPropsSample;

