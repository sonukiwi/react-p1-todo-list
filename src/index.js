import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { data } from "./data";
import SingleTask from "./singleTask";

const App = () => {
  const [task, setTask] = useState(data);
  const addTask = () => {
    const length = task.length;
    const taskValue = document.getElementById("valueOfTask").value;
    document.getElementById("valueOfTask").value = "";
    const obj = {
      id: length + 1,
      value: taskValue,
    };
    setTask([...task, obj]);
  };
  return (
    <>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h3
          style={{
            textTransform: "uppercase",
            color: "white",
            fontWeight: "400",
          }}
        >
          works to be done
        </h3>
        <form>
          <input
            placeholder="Enter The Work"
            className="inputBox"
            type="text"
            id="valueOfTask"
          />
          <div style={{ display: "inline-block", verticalAlign: "middle" }}>
            <i className="fas fa-plus fa-lg" onClick={addTask}></i>
          </div>
        </form>
        <div style={{ marginTop: "24px", textAlign: "center" }}>
          {task.map((valueTemp) => {
            const { id, value } = valueTemp;
            return <SingleTask key={id} value={value} id={id} task={task} />;
          })}
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
