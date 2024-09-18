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

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="updateobjects" element={<Car />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    
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
      </BrowserRouter><SampleCounter></SampleCounter><MyPropsSample /><GenRandomInteger /></>
  );
}

export default App;