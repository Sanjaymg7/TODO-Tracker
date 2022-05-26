import React from 'react'

class AddButton extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <button onClick={this.props.onAddClick}>ADD</button>
    )
  }
}

export default AddButton