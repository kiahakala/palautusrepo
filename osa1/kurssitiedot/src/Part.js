import React from "react";

const Part = (props) => {
  return (
    <div className="App">
        <p>{props.part} {props.exercises}</p>
    </div>
  );
}

export default Part