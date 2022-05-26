import React from 'react'
import './Task.css'
import AddButton from './AddButton';


class Task extends React.Component {
    constructor(props){
        super(props);
    }

    taskDelete = () => {
      this.props.onDelete(this.props.idValue);
    }

    taskUpdate = () => {
      this.props.onUpdate(this.props.idValue);
    }

  render() {
    return (
      <div className='taskPannel'>
          <h3>{this.props.taskName}</h3>
          <AddButton onAddClick={this.taskUpdate} btnValue="Edit" btnClass="btnEdit" />
          <AddButton onAddClick={this.taskDelete} btnValue="Delete" btnClass="btnDelete" />
          {/* <button className='btnEdit'>Edit</button> */}
          {/* <button className='btnDelete' onClick={e=>this.props.onDelete(this.props.idValue)}>Delete</button> */}

      </div>
    )
  }
}

export default Task