import React from "react";

// const props = {
//     quote:"a marvelous quote!"
// }

export default function Quote(props) {
  const logr = () => {
    console.log(props);
  };
  return (
    <div>
      {logr()}
      <h1>{props.quote}</h1>
    </div>
  );
}
