// import UserInfo from'./UserInfo';
import Displayinfo from "./Displayinfo";
import React from "react";

class MyComponent2 extends React.Component {

  //JSX
  render() {
    const myAge1 = 27;
    const myName1 = "Minh";
    const myAge2 = 30;
    const myName2 = "Tuan";
    return (
      <div>
        {/* <UserInfo /> */}
        <br /><br />
        <Displayinfo name={myName1} age={myAge1} />
        <hr />
        <Displayinfo name={myName2} age={myAge2} />
        
      </div>
    );
  }
};

export default MyComponent2;
