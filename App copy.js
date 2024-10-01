import { createContext } from "react";
import Component1 from "./Components/Component1";
import Component3 from "./Components/Component3";
import Greeting from "./Components/Greeting";
import UserProfile from "./Components/UserProfile";
import ComponentA from "./Components/ComponentA";

// useContext() = React Hook that allows you to share values
//                            between multiple levels of components
//                            without passing props through each level
//Provider Component
//1. Import {createContext} from 'react'
//2. export const MyContext = createContext();
//3. <MyContext.Provider value={user}>
{
  /* <Child /> */
}
// </MyContext.Provider>

//Consumer Components
//import { useContext } from "react";
// import { MyContext } from "./ComponentA";
//const value = useContext(MyContext);
const App = () => {
  return (
    <>
      {/*     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="updateobjects" element={<Car />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* <CounterApp></CounterApp> */}
      {/* <Context.Provider value={{ data: "Data from context!" }}>
        <Greeting />
      </Context.Provider>
      <Component3></Component3> */}
      <ComponentA />
      {/* <SampleListData /> */}
      {/* <SampleCounter></SampleCounter><MyPropsSample /><GenRandomInteger /> */}
    </>
  );
};

export default App;
