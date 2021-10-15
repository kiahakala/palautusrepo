import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = (props) => {

    console.log(props)

  return (
    <div className="App">
        <Header name={props.course} />
        <Content parts={props.parts} />
    </div>
  );
}

export default Course