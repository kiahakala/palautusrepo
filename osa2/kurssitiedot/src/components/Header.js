import React from "react";

const Header = (props) => {

    // console.log(props)
  
    return (
    <div className="App">
        <h2>{props.name}</h2>
    </div>
  );
}

export default Header