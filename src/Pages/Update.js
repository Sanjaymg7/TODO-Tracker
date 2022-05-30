import React from "react";
import { createBrowserHistory as history } from "history";
import Form from "../Components/Form";
import "./Update.css";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem("todoList"));
  }

  inputHandler = (val) => {
    this.setState({ inputTask: val });
  };

  updateHandler = () => {
    const historyObj = history();
    const taskId = this.state.updateId;
    const updateTaskName = this.state.inputTask;
    if (updateTaskName.trim() !== "") {
      this.state.tasks.filter((task) => task.id == taskId)[0]["title"] =
        updateTaskName.trim();
      this.state.tasks.filter((task) => task.id == taskId)[0][
        "isUpdated"
      ] = true;
      const updatedState = {
        tasks: this.state.tasks,
        inputTask: "",
        idVal: this.state.idVal,
        updation: false,
        updateId: 0,
      };
      this.setState({ updation: false, updateId: 0, inputTask: "" });
      window.localStorage.setItem("todoList", JSON.stringify(updatedState));
      // window.location = `/`;
      historyObj.push("/");
      historyObj.go();
    } else {
      alert("Please provide valid task name");
    }
  };

  updateTodo = {
    onFieldChange: this.inputHandler,
    className: "updateInput",
    onAddClick: this.updateHandler,
    btnValue: "Update",
    btnClass: "taskUpdateBtn",
  };

  render() {
    return (
      <div>
        <h1 className="updateHeading">Update Task</h1>
        <div className="inputArea">
          <Form formData={this.updateTodo} fieldVal={this.state.inputTask} />
        </div>
      </div>
    );
  }
}

export default Update;
