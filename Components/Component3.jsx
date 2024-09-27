import React, { createContext, useContext } from "react";

const Context = createContext();

const Component3 = () => {
    const context = useContext(Context)
    return(
        <>
        {console.log("user value context-- ", context)}
        <h1>Hello 1 {context}</h1>        
        </>
    )
}

export default Component3;