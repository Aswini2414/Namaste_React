import React from "react";
import ReactDOM from "react-dom";
import Organic from "./organic.jpg";
import { IoIosSearch } from "react-icons/io";
import { HiUser } from "react-icons/hi2";
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
*/

// const heading = React.createElement("h1", { id: "heading" }, "I am h1 heading");

const header = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "I am a heading h1"),
  ,
  React.createElement("h2", {}, "I am a heading h2"),
  ,
  React.createElement("h3", {}, "I am a heading h3"),
]);

const JSXHeader = (
  <div>
    <h1 className="heading">I am a heading h1</h1>
    <h2 className="heading">I am a heading h2</h2>
    <h3 className="heading">I am a heading h3</h3>
  </div>
);

const JsxHeading = <h1>I am a heading using JSX</h1>;

const Title = () => {
  return <h1>Hi I am from Function Composition</h1>;
};

const Comp = () => {
  return (
    <div>
      {JSXHeader}
      <Title />
    </div>
  );
};

const HeaderComp = () => {
  return (
    <div className="flex">
      <img src={Organic} alt="logo" width="150px" height="150px" className="img" />
      <div className="flex2">
        <input type="text" placeholder="Search..." />
        <IoIosSearch className="search-icon" />
      </div>
      <HiUser className="user"/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComp />);
