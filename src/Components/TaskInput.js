import React from 'react'
import './TaskInput.css'

class TaskInput extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <input type="text" className='inputField' value={this.props.fieldVal} onChange={e=>this.props.onFieldChange(e.target.value)} />
    )
  }
}

export default TaskInput