import React from "react";
import { data } from "./data";

const SingleTask = (props) => {
  const { id, value, task } = props;
  const makeItGone = () => {
    document.getElementById(idToBeGiven).remove();
  };
  const idToBeGiven = "thisIsId" + id.toString();
  return (
    <div
      id={idToBeGiven}
      style={{
        textAlign: "center",
        backgroundColor: "white",
        padding: "4px",
        marginBottom: "12px",
        marginLeft: "28vw",
        marginRight: "28vw",
        borderRadius: "4px",
      }}
    >
      <span style={{ color: "black" }}>{value}</span>
      <button
        onClick={makeItGone}
        style={{
          float: "right",
          border: "none",
          backgroundColor: "white",
          cursor: "pointer",
        }}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default SingleTask;
