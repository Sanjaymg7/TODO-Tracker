import React from 'react'

class TaskInput extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <input type="text" onChange={e=>this.props.onFieldChange(e.target.value)} />
    )
  }
}

export default TaskInput