import React from "react";
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Father = ({ house }) => {
  return (
    <div>
      <h4>Father</h4>
      <p>House: {house}</p>
      <div style={{ display: "flex" }}>
        <Myself house={house}></Myself>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </div>
    </div>
  );
};

export default Father;
