import React from 'react'
import './AddButton.css'

class AddButton extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <button className={this.props.btnClass} onClick={this.props.onAddClick}>{this.props.btnValue}</button>
    )
  }
}

export default AddButton