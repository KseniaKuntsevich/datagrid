import React, {Component} from 'react';
import App from './App'

import { connect } from 'react-redux';

import {
  setTodoToRender,
  setTodo,
  setActiveTitle,
  setActiveTitleIsUp,
  setIsTodoLoaded
} from './store/app/actions'




const mapStateToProps = state => {
  return {
    activeTitle: state.app.activeTitle,
    activeTitleIsUp: state.app.activeTitleIsUp,
    isTodoLoaded: state.app.isTodoLoaded,
    todo: state.app.todo,
    todoToRender : state.app.todoToRender
  }
}
 
const mapDispatchToProps = {
  setTodoToRender,
  setTodo,
  setActiveTitle,
  setActiveTitleIsUp,
  setIsTodoLoaded
}



class AppContainer extends Component {
  render() {
    return(
      <App
        activeTitle={this.props.activeTitle}
        activeTitleIsUp={this.props.activeTitleIsUp}
        isTodoLoaded={this.props.isTodoLoaded}
        todo={this.props.todo} 
        todoToRender={this.props.todoToRender}

        setTodoToRender={this.props.setTodoToRender} 
        setTodo={this.props.setTodo}
        setActiveTitle={this.props.setActiveTitle}
        setActiveTitleIsUp={this.props.setActiveTitleIsUp}
        setIsTodoLoaded={this.props.setIsTodoLoaded}
        />
     
    )

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
 
