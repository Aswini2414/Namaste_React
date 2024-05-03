import React from "react";
import ReactDOM from "react-dom"
/*
<div id="parent">
    <div id="child">
    <h1>I am h1 heading</h1>
    <h2>I am h2 heading</h2>
    </div>
    <div id="child">
    <h1>I am h1 heading</h1>
    <h2>I am h2 heading</h2>
    </div>
</div>

// const heading = React.createElement("h1", { id: "heading" }, "I am h1 heading");


*/

const nested = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 heading"),
    React.createElement("h2", {}, "I am h2 heading"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 heading"),
    React.createElement("h2", {}, "I am h2 heading"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nested);
