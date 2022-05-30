import React from "react";
import "./Task.css";
import AddButton from "./Button";

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  taskDelete = () => {
    this.props.onDelete(this.props.idValue);
  };

  taskUpdate = () => {
    this.props.onUpdate(this.props.idValue);
  };

  render() {
    return (
      <div className="taskPannel">
        <h3>{this.props.taskName}</h3>
        <AddButton
          onAddClick={this.props.didUpdated ? () => {} : this.taskUpdate}
          btnValue={this.props.didUpdated ? "Updated" : "Edit"}
          btnClass="btnEdit"
        />
        <AddButton
          onAddClick={this.taskDelete}
          btnValue="Delete"
          btnClass="btnDelete"
        />
      </div>
    );
  }
}

export default Task;
