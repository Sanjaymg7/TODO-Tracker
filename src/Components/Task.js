import React from 'react'
import './Task.css'

class Task extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className='taskPannel'>
          <h3>{this.props.taskName}</h3>
          <button className='btnEdit'>Edit</button>
          <button className='btnDelete' onClick={e=>this.props.onDelete(this.props.idValue)}>Delete</button>
      </div>
    )
  }
}

export default Task