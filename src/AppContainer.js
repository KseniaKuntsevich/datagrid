import React, {Component} from 'react';
import App from './App'

import { connect } from 'react-redux';

import {
  setTodoToRender,
  setTodo,
  setActiveTitle,
  setActiveTitleIsUp,
  setIsTodoLoaded,
  setActiveColumns,
  setColumnsStatus,
  setActiveTitles,
  setIsTableVirtual
} from './store/app/actions'




const mapStateToProps = state => {
  return {
    activeTitle: state.app.activeTitle,
    activeTitleIsUp: state.app.activeTitleIsUp,
    isTodoLoaded: state.app.isTodoLoaded,
    todo: state.app.todo,
    todoToRender: state.app.todoToRender,
    activeColumns: state.app.activeColumns,
    columnsStatus: state.app.columnsStatus,
    activeTitles: state.app.activeTitles,
    isTableVirtual: state.app.isTableVirtual
  }
}
 
const mapDispatchToProps = {
  setTodoToRender,
  setTodo,
  setActiveTitle,
  setActiveTitleIsUp,
  setIsTodoLoaded,
  setActiveColumns,
  setColumnsStatus,
  setActiveTitles,
  setIsTableVirtual
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
        activeColumns={this.props.activeColumns}
        columnsStatus={this.props.columnsStatus}
        activeTitles={this.props.activeTitles}
        isTableVirtual={this.props.isTableVirtual}

        setTodoToRender={this.props.setTodoToRender} 
        setTodo={this.props.setTodo}
        setActiveTitle={this.props.setActiveTitle}
        setActiveTitleIsUp={this.props.setActiveTitleIsUp}
        setIsTodoLoaded={this.props.setIsTodoLoaded}
        setActiveColumns={this.props.setActiveColumns}
        setColumnsStatus={this.props.setColumnsStatus}
        setActiveTitles={this.props.setActiveTitles}
        setIsTableVirtual={this.props.setIsTableVirtual}
        />
     
    )

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
 
