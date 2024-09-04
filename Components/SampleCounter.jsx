import React from 'react';

class SampleCounter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    console.log("Component Re-renders Constructor");
  }

  increment() {
    console.log("Component Re-renders Inc Func");
    this.setState(previousValue => ({
      count: previousValue.count + 1,
    }));
  }

  decrement() {
    console.log("Component Re-renders Dec Func");
    this.setState(previousValue => ({
      count: previousValue.count - 1,
    }));
  }

  componentDidMount() {
    console.log("Component did mount has been called");
    setTimeout(() => {
      this.setState({count: 1})
    }, 1000)
  }

  shouldComponentUpdate() {
    console.log("Should component has been called")
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate has been called")
    document.getElementById("div1").innerHTML =
    "Before the update, the count was " + prevState.count;
  }
  componentDidUpdate() {
    // setTimeout(() => {
    //   this.setState({count: 5})
    // }, 1000)
    console.log("componentdidupdate has been called")
    document.getElementById("div2").innerHTML =
    "The updated count is " + this.state.count;
  }

  componentWillUnmount() {
    console.log("The component is to be unmounted.");
    this.setState({count: 10})
  }
  chkEvent = (a, b) => {
    console.log("a---", a)
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }
  render() {
    console.log("Component Re-renders Render Block");
    return (
      <div className="counter">
        <h1>Sample Counter App Using Class Component</h1>
        <h2>{this.state.count}</h2>
        <div id="div1"></div>
        <div id="div2"></div>
        <button onClick={this.increment}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>
        
        <br></br>
        <button onClick={(event)=> this.chkEvent("Counter", event)}>Check Events</button>
      </div>
    );
  }
}

export default SampleCounter;