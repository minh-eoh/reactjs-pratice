import logo from "./logo.svg";
import "./App.css";
// import MyComponent from "../src/component/MyComponent";
import Nav from "./component/Nav";
import { useState, useEffect, use } from "react";
// import MyComponent2 from "../src/component/MyComponent2";
function App() { 
  //JSX = html + js
  const [aa, setaa] = useState("Minh");
    let myname = "Minh";
    let number = 2025;
    let obj = { name: "Minh", channel: "EOH" };
    let link = 'https://e-ra.io/index.html'
    console.log('11')
    useEffect(() => {
      console.log('22')
      console.log("run useEffect");
    }, []);

  //template  
  return (
    <div className="App">
    {      console.log('33')
    }
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>hello world with React and {myname} !</h1>
        <p style={{ color: "yellow" }}>{JSON.stringify(obj)}</p>
        
          {number} {obj.name} {obj.channel} <a href={link}>Click
          <a href={link} target="_blank" ></a>Visit my channel</a>
        {/* <MyComponent /> */}
        {/* <MyComponent2 /> */}
        <Nav/>
        
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=8JkHV2GZL0M"
          target="_blank"
          rel="noopener noreferrer"
        >
          dkfjghkdfjf;lkdafj;lads
        </a>
      </header>
    </div>
  );
}

export default App;
