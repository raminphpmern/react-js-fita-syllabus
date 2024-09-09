import { useState } from "react";
// import ReactDOM from "react-dom/client";

const SampleUseState = () => {
// function SampleUseState() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
        console.log("prev state---",previousState);
      return { ...previousState, color: "blue" }
    });
    // return setCar({color: "blue"});

  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Change the Color</button>
    </>
  )
}

export default SampleUseState;