import React from "react";

const Part = (props) => {
    console.log(props)
  return (
    <div className="App">
        <p>{props.name} {props.exercises}</p>
    </div>
  );
}

export default Part