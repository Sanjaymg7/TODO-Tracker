import React from 'react'
import './ParentComponent.css'
import AddButton from './AddButton';
import Task from './Task';
import TaskInput from './TaskInput';


class ParentComponent extends React.Component {
    constructor(){
        super();
        this.state = {tasks:[],inputTask:'',idVal:0,updated:false};
    }

    inputHandler = val =>{
        this.setState({inputTask:val});
    }

    addHandler = () => {
        if(this.state.inputTask!==''){
            this.state.tasks.push({id:this.state.idVal,title:this.state.inputTask});
            this.setState({idVal:this.state.idVal+1,inputTask:''});
        }else{
            alert('Please enter the task name and then add!');
        }
    }

    deleteTaskHandler = id => {
        this.setState({tasks:this.state.tasks.filter(task => task.id!=id)});
    }
    
    updateHandler = id => {
        const updateTaskName = prompt('Please provide the task name!');
        if(updateTaskName!=null){
            if(updateTaskName.trim()!==''){
                this.state.tasks.filter(task => task.id==id)[0]['title'] = updateTaskName;
                this.setState({updated:true});
    
            }else{
                alert('Please provide valid task name')
            }
        }
    }

  render() {
    return (
      <div>
          <div className='inputContainer'>
              <h1 className='header'>TODO LIST</h1>
              <div className='inputWrapper'>
                <TaskInput onFieldChange={this.inputHandler} fieldVal={this.state.inputTask} />
                <AddButton onAddClick={this.addHandler} btnValue="Add" btnClass="taskAddBtn" />
              </div>
          </div>
          <div className='tasksContainer'>
              {this.state.inputTask=='' ? this.state.tasks.map(val => (<Task key={val.id} taskName={val.title} idValue={val.id} onUpdate={this.updateHandler} onDelete={this.deleteTaskHandler} />)) :
                this.state.tasks.filter(task => task.title.includes(this.state.inputTask)).map(val => (<Task key={val.id} taskName={val.title} idValue={val.id} onUpdate={this.updateHandler} onDelete={this.deleteTaskHandler} />))}
          </div>
      </div>
    )
  }
}

export default ParentComponent