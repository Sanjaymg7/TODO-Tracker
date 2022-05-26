import React from 'react'
import './AddButton.css'

class AddButton extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <button className='taskAddBtn' onClick={this.props.onAddClick}>ADD</button>
    )
  }
}

export default AddButton