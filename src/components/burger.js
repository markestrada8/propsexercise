import React from "react";

// const props = {
//   nobottbun: false,
//   noburger: false,
//   nocheese: false,
//   nolettuce: false,
//   notomato: false,
//   notopbun: false,
// };

export default function Burger(props) {
  const logr = () => {
    console.log(props);
  };

  return (
    <div className="plate">
      {logr()}
      {props.notopbun ? "" : <div className="bun"></div>}
      {props.nolettuce ? "" : <div className="lettuce"></div>}
      {props.notomato ? "" : <div className="tomato"></div>}
      {props.nocheese ? "" : <div className="cheese"></div>}
      {props.noburger ? "" : <div className="burger"></div>}
      {props.nobottbun ? "" : <div className="bun"></div>}
    </div>
  );
}
