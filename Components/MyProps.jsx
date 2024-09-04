
function MyProps(props) {
  return (
    <div className="my-component">
    {/* // instead of `class` in html `className` is used. */}
      <h1>{props.title}</h1>       
      {/* // All Props are passed as an Object */}
      <p>{props.description}</p>

      <div className="content">   
          {/* {props.children}   */}
          {/* // The Extra data/JSX passed can be accessed using props.children */}
      </div>
    </div>
  );
}

export default MyProps;
