import logo from "./logo.svg";
import "./App.css";
// import MyComponent from "../src/component/MyComponent";
import MyComponent2 from "../src/component/MyComponent2";
function App() {
  //JSX = html + js

  //template
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {/* <MyComponent /> */}
        <MyComponent2 />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
