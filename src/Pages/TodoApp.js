import React from "react";
import { createBrowserHistory as history } from "history";
import "./TodoApp.css";
import Task from "../Components/Task";
import Form from "../Components/Form";

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
        title: this.state.inputTask.trim(),
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
    const historyObj = history();
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
    // window.location = `/update`;
    historyObj.push("update");
    historyObj.go(); //Reloads the page
  };

  todoInput = {
    onFieldChange: this.inputHandler,
    className: "inputField",
    onAddClick: this.addHandler,
    btnValue: "Add",
    btnClass: "taskAddBtn",
  };

  render() {
    return (
      <div>
        <div className="inputContainer">
          <h1 className="header">TODO LIST</h1>
          <div className="inputWrapper">
            <Form formData={this.todoInput} fieldVal={this.state.inputTask} />
          </div>
        </div>
        <div className="tasksContainer">
          {this.state.tasks
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
