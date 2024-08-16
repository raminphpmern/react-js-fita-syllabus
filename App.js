import logo from './logo.svg';
import './App.css';

const x = 5;
const today = new Date();
const date = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
} 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi Team Welcome to React Course !!!</h1>
        <p>how are you sir!!</p>
        <span>So far Good...</span>
        <h1>React is {x} times better with JSX</h1>
        <span>{text}</span>
        <span>Today is {date} - {month} - {year} </span>
      </header>
    </div>
  );
}

export default App;
