import React, { Component } from "react";
import Burger from "./burger";
import Yinandyang from "./yinandyang";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>The code burger you ordered looks like this....</h1>
        <Burger
          notopbun={false}
          nolettuce={false}
          notomato={false}
          nocheese={false}
          noburger={false}
          nobottbun={false}
        />
        <Yinandyang trueorfalse={false} />
      </div>
    );
  }
}
