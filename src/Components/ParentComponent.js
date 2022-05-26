import React from 'react'
import './ParentComponent.css'
import AddButton from './AddButton';
import Task from './Task';
import TaskInput from './TaskInput';


class ParentComponent extends React.Component {
    constructor(){
        super();
        this.state = {tasks:[],inputTask:'',idVal:0};
    }

    inputHandler = val =>{
        this.setState({inputTask:val});
    }

    addHandler = () => {
        if(this.state.inputTask!=''){
            const newArray = this.state.tasks.push({id:this.state.idVal,title:this.state.inputTask});
            this.setState({idVal:this.state.idVal+1});
        }else{
            alert('Please enter the task name and then add!');
        }
    }

    deleteTaskHandler = id => {
        this.setState({tasks:this.state.tasks.filter(task => task.id!=id)});
    }

  render() {
    return (
      <div>
          <div className='inputContainer'>
              <h1 className='header'>TODO LIST</h1>
              <div className='inputWrapper'>
                <TaskInput onFieldChange={this.inputHandler} />
                <AddButton onAddClick={this.addHandler} />
              </div>
          </div>
          <div className='tasksContainer'>
              {this.state.tasks.map(val => (<Task key={val.id} taskName={val.title} idValue={val.id} onDelete={this.deleteTaskHandler} />))}
          </div>
      </div>
    )
  }
}

export default ParentComponent