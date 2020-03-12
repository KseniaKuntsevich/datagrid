import React, {Component} from 'react';
import Datagrid from './components/Datagrid.js';
import DatagridTable from './components/DatagridTable.js';
import DatagridHeader from './components/DatagridHeader.js';
import DatagridTitle from './components/DatagridTitle.js';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  constructor(props){
    super(props);
    this.onTittleClick = this.onTittleClick.bind(this)
    this.titles = ['id', 'title', 'completed', 'importance']

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos').then(rsponse => rsponse.json())
    .then(todo => {
      this.props.setTodoToRender(todo)
      this.props.setTodo(todo)
      this.props.setIsTodoLoaded(true)
    })
      
  }

  getTodoSortedBy(title){
    if(!this.props.todo[0].hasOwnProperty(title)) {
      return this.props.todoToRender
    }
    return [...this.props.todo].sort((a, b) => (a[title] > b[title] ? 1 : -1))
  }

  onTittleClick(title){
    if(title === this.props.activeTitle) {
      this.props.setActiveTitleIsUp(!this.props.activeTitleIsUp)
      this.props.setTodoToRender([...this.props.todoToRender].reverse())

    } else {
      this.props.setActiveTitle(title)
      this.props.setActiveTitleIsUp(false)
      this.props.setTodoToRender(this.getTodoSortedBy(title))
    }

  }

  getHeaderTitles () {
    return this.titles.map((title, i) => (
      <DatagridTitle title={title} onClick={this.onTittleClick}  isUp={this.props.activeTitleIsUp} isActive={this.props.activeTitle === title} />
    ))
  }


  render() {
    return(
      <div>
      { 
        this.props.isTodoLoaded ? 
        <Datagrid 
          content={{
            header: <DatagridHeader titles={this.getHeaderTitles()} 
             isUp={true} onClick={this.onTittleClick} />,
            body: <DatagridTable todo={this.props.todoToRender}  />
          }} 
        /> 
        : 'Processing...' 
      }
      </div>
    )

  }
}

export default App;
