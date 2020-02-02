import React, { Component } from 'react'
import './Template.css'

class Template extends Component {
  constructor(props){
    super(props)
    this.state = {
      completed: this.props.info.completed
    }
  }

//  done = () => {
//  var parents = document.getElementsByClassName("single-task")
//  for(var i = 0; i < parents.length; i++){
//   var parent = parents[i]
//   var firstChild = parent.getElementsByTagName('p')[0]
//   var secondChild = parent.getElementsByTagName('div')[0]
//
//    if(parents[i].firstChild.innerHTML === this.props.info.name){
//      if(this.state.completed){
//      firstChild.style.textDecoration = "none"
//      secondChild.style.backgroundColor = "red"
//      secondChild.innerHTML = "Uncompleted"
//      this.setState({
//        completed: false
//       })
//      } else {
//        firstChild.style.textDecoration = "line-through"
//        secondChild.style.backgroundColor = "lightgreen"
//        secondChild.innerHTML = "Completed!!"
//        this.setState({
//          completed: true
//         })
//    }
//   }
// }
//
//   }
  render(){
    return (
    <div className="single-task">
      <p>{this.props.info.name}</p>
      <div className="completed-butt" onClick={this.done}>Uncompleted</div>
      <div className="remove-button" onClick={() => {this.props.handleClick(this.props.info.name)}}>x</div>
    </div>
   )
  }
}
export default Template
