import React from "react";

class Displayinfo extends React.Component {
 render() {
    const { name, age } = this.props;
  return (
   <div>
     <div>My name's {name}</div>
     <div>My age's {age} </div>

   </div>
  );
}
}

export default Displayinfo;
