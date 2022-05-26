import React from 'react'
import AddButton from './AddButton';
import TaskInput from './TaskInput';

class ParentComponent extends React.Component {
    constructor(){
        super();
        this.state = {tasks:[],inputTask:''};
    }

    inputHandler = val =>{
        this.setState({inputTask:val});
        console.log(this.state);
    }

    addHandler = () => {
        const newArray = this.state.tasks.push(this.state.inputTask);
        // this.setState({tasks:[...this.state.tasks,this.state.inputTask]});
        console.log(this.state);
    }

  render() {
    return (
      <div>
          <div>
              <TaskInput onFieldChange={this.inputHandler} />
              <AddButton onAddClick={this.addHandler} />
          </div>
      </div>
    )
  }
}

export default ParentComponent