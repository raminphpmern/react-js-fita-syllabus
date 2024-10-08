import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Pages/Layout";
import Home from "./Components/Pages/Home";
import Blogs from "./Components/Pages/Blogs";
import Contact from "./Components/Pages/Contact";
import Car from "./Components/CarComps";
import NoPage from "./Components/Pages/NoPage";
import SampleCounter from "./Components/SampleCounter";
import MyPropsSample from "./Components/MyPropsSample";
import GenRandomInteger from "./Components/GenRandomInteger";
import CounterApp from "./Components/CounterApp";
import SampleListData from "./Components/SampleListData";
import 'bootstrap/dist/css/bootstrap.min.css';
import Component1 from "./Components/Component1";
import Component3 from "./Components/Component3";
import Register from "./Components/Register";
import RefForm from "./Components/RefForm";
import ComponentA from "./Components/ComponentA";
import SampleForm from "./Components/SampleForm";
import ReducerHookSample from "./Components/ReducerHookSample";
// useContext() = React Hook that allows you to share values
//                            between multiple levels of components
//                            without passing props through each level
//Provider Component
//1. Import {createContext} from 'react'
//2. export const MyContext = createContext();
//3. const [user, setUser] = useState('Hi This is Fita');
//3. <MyContext.Provider value={user}>
  /* <Child /> */
// </MyContext.Provider>

//Consumer Components
//import { useContext } from "react";
// import { MyContext } from "./ComponentA";
//const value = useContext(MyContext);

const App = () => {
  return (
    <>
    
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
      </BrowserRouter>
      <ReducerHookSample />
      {/* <Register></Register> */}
      {/*<RefForm />*/}
      {/* <br /><br /><b>Use Context Sample</b> <br /><br />
      <ComponentA />
      <SampleForm /> */}
      {/* <SampleCounter></SampleCounter> */}
      {/* <CounterApp></CounterApp> */}
      {/* <Context.Provider value={{ data: "Data from context!" }}>
        <Component1></Component1>
        <Component3></Component3>
      </Context.Provider>
      <Component3></Component3> */}
      {/* <SampleListData /> */}
      {/* <SampleCounter></SampleCounter><MyPropsSample /><GenRandomInteger /> */}
      
    
      </>
  );
}

export default App;