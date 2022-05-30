import React from "react";
import "./AddButton.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className={this.props.btnClass} onClick={this.props.onAddClick}>
        {this.props.btnValue}
      </button>
    );
  }
}

export default Button;
