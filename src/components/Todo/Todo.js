import React, { Component } from 'react'
import Template from '../Template/Template.js'
import './Todo.css'

class Todo extends Component {
  constructor(){
    super()
      this.state = {
        tasks: [{name: 'dishes', completed: false},{name: 'vacuuming', completed: false},{name: 'weeding', completed: false}]

    }
  }
    newTask(name){
      if(name){
        document.getElementById('name').value = ''
        this.setState({
          tasks: this.state.tasks.concat({name: name, completed: false})
        })
      }
        console.log(name);
    }

    deleteTask = (name) => {
      this.setState({
        tasks: this.state.tasks.filter((obj)=>{
          if(obj.name === name){
            return false
          }
            return true
        })
      })
    }
           render() {
             console.log(this.state.tasks)
             var tasks = this.state.tasks.map(obj => {
               return <Template key={Math.random()} info={{name: obj.name, completed: obj.completed}} handleClick={this.deleteTask}/>
             })
             return (
               <div  id="todo-wrap">
              {tasks}
                <form>
                <input id="name" type="text" placeholder="New Task"/>
                <div onClick={() => {this.newTask(document.getElementById('name').value)}} id="add-button">Add Task</div>
                </form>
               </div>

             )
           }
}
export default Todo
