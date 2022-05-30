import React from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Input
          onFieldChange={this.props.formData.onFieldChange}
          fieldVal={this.props.fieldVal}
          className={this.props.formData.className}
        />
        <Button
          onAddClick={this.props.formData.onAddClick}
          btnValue={this.props.formData.btnValue}
          btnClass={this.props.formData.btnClass}
        />
      </div>
    );
  }
}

export default Form;
