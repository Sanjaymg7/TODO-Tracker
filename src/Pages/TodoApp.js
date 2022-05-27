import React from "react";
import { useNavigate } from "react-router-dom";
import "./TodoApp.css";
import AddButton from "../Components/AddButton";
import Task from "../Components/Task";
import TaskInput from "../Components/TaskInput";

class TodoApp extends React.Component {
  constructor() {
    super();
    // this.state = this.initialState;
    this.state = JSON.parse(window.localStorage.getItem("todoList")) || {
      tasks: [],
      inputTask: "",
      idVal: 0,
      updation: false,
      updateId: 0,
    };
  }

  inputHandler = (val) => {
    this.setState({ inputTask: val });
  };

  addHandler = () => {
    if (this.state.inputTask !== "") {
      this.state.tasks.push({
        id: this.state.idVal,
        title: this.state.inputTask,
        isUpdated: false,
        created: new Date(),
      });
      this.setState({ idVal: this.state.idVal + 1 });
      this.state.inputTask = "";
      window.localStorage.setItem("todoList", JSON.stringify(this.state));
    } else {
      alert("Please enter the task name and then add!");
    }
  };

  deleteTaskHandler = (id) => {
    this.setState({ tasks: this.state.tasks.filter((task) => task.id != id) });
    window.localStorage.setItem(
      "todoList",
      JSON.stringify({
        tasks: this.state.tasks.filter((task) => task.id != id),
        inputTask: this.state.inputTask,
        idVal: this.state.idVal,
        updation: this.state.updation,
        updateId: this.state.updateId,
      })
    );
  };

  editHandler = (id) => {
    this.setState({ updation: true, updateId: id });
    const updateTaskTitle = this.state.tasks.filter((task) => task.id == id)[0][
      "title"
    ];
    this.setState({ inputTask: updateTaskTitle });
    window.localStorage.setItem(
      "todoList",
      JSON.stringify({
        tasks: this.state.tasks,
        inputTask: updateTaskTitle,
        idVal: this.state.idVal,
        updation: true,
        updateId: id,
      })
    );
    window.location = `/update`;
  };

  render() {
    return (
      <div>
        <div className="inputContainer">
          <h1 className="header">{"TODO LIST"}</h1>
          <div className="inputWrapper">
            <TaskInput
              onFieldChange={this.inputHandler}
              fieldVal={this.state.inputTask}
              className={"inputField"}
            />
            <AddButton
              onAddClick={this.addHandler}
              btnValue={"Add"}
              btnClass={"taskAddBtn"}
            />
          </div>
        </div>
        <div className="tasksContainer">
          {this.state.inputTask == ""
            ? this.state.tasks.map((val) =>
                new Date(val.created).getDate() < new Date().getDate() ? (
                  ""
                ) : (
                  <Task
                    key={val.id}
                    taskName={val.title}
                    idValue={val.id}
                    didUpdated={val.isUpdated}
                    onUpdate={this.editHandler}
                    onDelete={this.deleteTaskHandler}
                  />
                )
              )
            : this.state.tasks
                .filter((task) => task.title.includes(this.state.inputTask))
                .map((val) =>
                  new Date(val.created).getDate() < new Date().getDate() ? (
                    ""
                  ) : (
                    <Task
                      key={val.id}
                      taskName={val.title}
                      idValue={val.id}
                      didUpdated={val.isUpdated}
                      onUpdate={this.editHandler}
                      onDelete={this.deleteTaskHandler}
                    />
                  )
                )}
        </div>
      </div>
    );
  }
}

export default TodoApp;
