import { useContext } from "react";
import { UserContext } from "./ComponentA";
import ComponentD from "./ComponentD";
const ComponentC = () => {
  const userData = useContext(UserContext);
  return (
    <>
      <div className="box">
        <h1>Component C</h1>
        <ComponentD />
        <h2>{`Hello again ${userData}`}</h2>
      </div>
    </>
  );
};

export default ComponentC;
