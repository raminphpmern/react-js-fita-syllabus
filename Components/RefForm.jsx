import React, { useRef } from "react";

const RefForm = () => {
  const inputRef = useRef(); // Ref for input field
  const countRef = useRef(0); // Ref for mutable count value
  const ref = useRef('initial value');

  const handleButtonClick = () => {
    // Accessing DOM properties . here we are using it to just get values
    console.log("Input value:", inputRef.current.value);

    // Triggering DOM methods , triggering dom methods according to need
    ref.current.focus();
    ref.current.select();

    // Storing mutable value , normally useRef should not be used to update values as it does not rerender the component.
    // There it can be useful at place where only one value is needed to be change and rerender is not needed.
    countRef.current++;
    console.log("Current count:", countRef.current);
  };

  return (
    <div>
      {console.log(ref.current.focus)}
      <input ref={inputRef} type="text" />
      <input ref={ref} type="text" />
      <button onClick={handleButtonClick}>Get Input Value, Focus Input, Increment Count</button>
    </div>
  );
};

export default RefForm;
