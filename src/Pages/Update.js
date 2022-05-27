import React from "react";
import TaskInput from "../Components/TaskInput";
import AddButton from "../Components/AddButton";
import "./Update.css";

class Update extends React.Component {
  constructor() {
    super();
    this.state = JSON.parse(window.localStorage.getItem("todoList"));
  }

  inputHandler = (val) => {
    this.setState({ inputTask: val });
  };

  updateHandler = () => {
    const taskId = this.state.updateId;
    const updateTaskName = this.state.inputTask;
    if (updateTaskName.trim() !== "") {
      this.state.tasks.filter((task) => task.id == taskId)[0]["title"] =
        updateTaskName;
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
      window.location = `/`;
    } else {
      alert("Please provide valid task name");
    }
  };

  render() {
    return (
      <div>
        <h1 className="updateHeading">Update Task</h1>
        <div className="inputArea">
          <TaskInput
            onFieldChange={this.inputHandler}
            fieldVal={this.state.inputTask}
            className={"updateInput"}
          />
          <AddButton
            onAddClick={this.updateHandler}
            btnValue={"Update"}
            btnClass={"taskUpdateBtn"}
          />
        </div>
      </div>
    );
  }
}

export default Update;
