import { useState, createContext, useContext } from "react";
import PageNameContext from "./PageNameContext";

// import Component2 from "./Component2";
import Component3 from "./Component3";

const Component1 = () => {

    const UserContext = createContext();
    const [user, setUser] = useState("This is Fita academy");

    
    return(
        <>
        <div>
        <PageNameContext.Provider value={user}>
            <Component3></Component3>    
        </PageNameContext.Provider>
            
        {/* <UserContext.Provider value={user}>
            <h1>Hi {user}</h1>
            <Component3></Component3>          
        </UserContext.Provider> */}
        </div>
        </>
    )
}

export default Component1;