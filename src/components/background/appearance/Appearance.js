import React from "react";
import KeyValue from "./KeyValue";

const Appearance = () => {
  return (
    <div className="appearancePanel">
      <span className="componentTitle">Appearance</span>
      <span className="italicNote">Click value to edit.</span>
      <KeyValue fieldName={"Age"} />
      <KeyValue fieldName={"Height"} />
      <KeyValue fieldName={"Weight"} />
      <KeyValue fieldName={"Build"} />
      <KeyValue fieldName={"Skin"} />
      <KeyValue fieldName={"Notes"} />
    </div>
  );
};

export default Appearance;
