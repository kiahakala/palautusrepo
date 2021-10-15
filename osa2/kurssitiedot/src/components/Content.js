import React from "react";
import Part from "./Part";

const Content= ({parts}) => {

let initialValue = 0
let total = parts.reduce(
    (previousValue, currentValue) => previousValue + currentValue.exercises
    , initialValue
)

  return (
    <div>
        {parts.map(part =>
        <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
        <strong>Total of {total} exercises</strong>
    </div>
  );
}

export default Content
