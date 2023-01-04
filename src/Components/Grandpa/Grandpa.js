import React from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grand.css";

const Grandpa = () => {
  const house = 7;
  return (
    <div>
      <h2 className="grandpa" style={{ display: "flex" }}>
        <Father house={house}></Father>
        <Uncle house={house}></Uncle>
        <Aunty house={house}></Aunty>
      </h2>
    </div>
  );
};

export default Grandpa;
