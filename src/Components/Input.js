import React from "react";
import "./TaskInput.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        type="text"
        className={this.props.className}
        value={this.props.fieldVal}
        onChange={(e) => this.props.onFieldChange(e.target.value)}
      />
    );
  }
}

export default Input;
