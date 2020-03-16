import React, {Component} from 'react';
import Datagrid from './components/Datagrid.js';
import DatagridTable from './components/DatagridTable.js';
import DatagridHeader from './components/DatagridHeader.js';

import HeaderTitles from './components/HeaderTitles'
import HeaderToggle from './components/HeaderToggle'
import HeaderSearches from './components/HeaderSearches'
import SaveCSV from './components/SaveCSV'
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  constructor(props){
    super(props);
    this.isShiftDown = false;
    this.activeRows = []
    this.onTittleClick = this.onTittleClick.bind(this)
    this.onRowClick = this.onRowClick.bind(this)
    this.deleteRow = this.deleteRow.bind(this)
    this.onTittleSearch = this.onTittleSearch.bind(this)
    this.onColumnToggle = this.onColumnToggle.bind(this)
    this.onMultipleTittleClick = this.onMultipleTittleClick.bind(this)
    this.activeFiltres = {}
    this.titles = ['id', 'user', 'title', 'completed', 'importance', 'category', 'date']
    this.colClasses = {
      id: "col-1",
      user: "col",
      title: "col-5",
      completed: "col",
      importance: "col",
      category: "col",
      date: "col-2",
    }

    document.addEventListener('keydown', (e) => this.isShiftDown = e.key === 'Shift' ? true : this.isShiftDown )
    document.addEventListener('keyup', (e) => this.isShiftDown = e.key === 'Shift' ? false : this.isShiftDown )
  }

  componentDidMount(){
    if(this.props.todo) {
      return 
    }
    const names = ['Tom Plushkin', 'Anna Jukova', 'Petya Petrov', 'Lev Andreevich']
    const categories =['home', 'work', 'vocation', 'to buy']
    fetch('https://jsonplaceholder.typicode.com/todos').then(rsponse => rsponse.json())
    .then(todos => {
      todos.forEach(todo => {
        const date = new Date(2019, Math.floor(Math.random() * 11), Math.floor(Math.random() * 28)+ 1)
        todo.date = date.toLocaleString()
        todo.importance = Math.floor(Math.random() * 10) + 1
        todo.user = names[Math.floor(Math.random() * 4)]
        todo.category = categories[Math.floor(Math.random() * 4)]
        todo.completed = todo.completed ? 'yes' : 'no'
      })
      for(let i = 200; i < 1001; i++) {
        todos.push(Object.assign({}, todos[i-200]))
        todos[i].id = i
      }
      const activeColumns = {}
      this.titles.forEach(key => activeColumns[key] = true)
      this.props.setTodoToRender(todos)
      this.props.setTodo(todos)
      this.props.setColumnsStatus(activeColumns)
      this.props.setActiveColumns(this.titles)
      this.props.setIsTodoLoaded(true)
      localStorage.setItem('todoToRender', JSON.stringify(this.props.todoToRender))
      localStorage.setItem('todo', JSON.stringify(this.props.todo))
      localStorage.setItem('columnsStatus', JSON.stringify(this.props.columnsStatus))
      localStorage.setItem('activeColumns', JSON.stringify(this.props.activeColumns))
      localStorage.setItem('isTodoLoaded', true)
    })
  }

  getTodoFilteredBy(title, str) {
    const { activeFiltres } = this
    if(!this.props.todo[0].hasOwnProperty(title)) {
      return this.props.todoToRender
    }
    if(str.length === 0){
      delete activeFiltres[title];
    } else {
      activeFiltres[title] = str;
    }
    return this.props.todo.filter(data => (
      Object.keys(activeFiltres).every(title => {
        return (''+data[title]).indexOf(activeFiltres[title]) > -1
      }
      )
    ))
  }

  discardRows(){
        
    this.activeRows.forEach(index => {
      delete this.props.todoToRender[index].isActive
    })
    this.activeRows = []
    

  }

  onRowClick(index){
    const newTodoToRender = [...this.props.todoToRender]
    const isClickedTwice = this.activeRows.indexOf(index) > -1
    newTodoToRender[index].isActive = true
    if(!this.isShiftDown){ this.discardRows() }
    if(!isClickedTwice){ this.activeRows.push(index) }
    this.props.setTodoToRender(newTodoToRender)
  }

  deleteRow() {
    const newTodoToRender = this.props.todoToRender.filter((n, i) => this.activeRows.indexOf(i) < 0)
    this.props.setTodoToRender(newTodoToRender)
    localStorage.setItem('todoToRender', JSON.stringify(newTodoToRender))
  }

  getTodoSortedBy(title) {
    if(!this.props.todo[0].hasOwnProperty(title)) {
      return this.props.todoToRender
    }
    return [...this.props.todo].sort((a, b) => (a[title] < b[title] ? -1 : 1))
  }

  onTittleSearch(title, str) {
    this.props.setTodoToRender(this.getTodoFilteredBy(title, str))
    localStorage.setItem('todoToRender', JSON.stringify(this.props.todoToRender))
  }

  onMultipleTittleClick(title){
    const {activeTitles, setActiveTitles, activeTitle, todo, setTodoToRender} = this.props
    activeTitles.push(title)
    setActiveTitles(activeTitles)
    const newTodoToRender = [...todo].sort((a, b) => {
      let res = a[activeTitle] < b[activeTitle] ? -1 : 1
      let isEqual = a[activeTitle] === b[activeTitle]
      let i = 0
      while(isEqual && activeTitles[i]){
        res = a[activeTitles[i]] < b[activeTitles[i]] ? -1 : 1
        isEqual = a[activeTitles[i]] === b[activeTitles[i]]
        i += 1
      }
      return res
    })
    setTodoToRender(newTodoToRender)
  }

  onTittleClick(title){
    if(this.isShiftDown){
      this.onMultipleTittleClick(title)
      return
    }
    this.props.setActiveTitles([])
    const { activeTitle, activeTitleIsUp, todoToRender } = this.props
    const nawActiveTitleIsUp = title === activeTitle ? !activeTitleIsUp : false
    const newTodoToRender = title === activeTitle ? [...todoToRender].reverse() : this.getTodoSortedBy(title)
    this.props.setActiveTitle(title)
    this.props.setActiveTitleIsUp(nawActiveTitleIsUp)
    this.props.setTodoToRender(newTodoToRender)
    localStorage.setItem('activeTitle', title)
    localStorage.setItem('activeTitleIsUp', nawActiveTitleIsUp)
    localStorage.setItem('todoToRender', JSON.stringify(newTodoToRender))
  }

  onColumnToggle(columnKey){
    const { setColumnsStatus, setActiveColumns, columnsStatus } = this.props
    columnsStatus[columnKey] = !columnsStatus[columnKey]
    setActiveColumns(this.titles.filter(title => columnsStatus[title]))
    setColumnsStatus(columnsStatus)
    localStorage.setItem('activeColumns', JSON.stringify(this.titles.filter(title => columnsStatus[title])))
    localStorage.setItem('columnsStatus', JSON.stringify(columnsStatus))
  }


  render() {
    return(
      <div className="container-fluid p-0">
      <SaveCSV todo={this.props.todoToRender} activeColumns={this.props.activeColumns} />
      { 
        this.props.isTodoLoaded ? 
        <Datagrid 
          content={{
            header: 
            <DatagridHeader 
              rows={[
                <HeaderToggle onClick={this.onColumnToggle} titles={this.titles} columnsStatus={this.props.columnsStatus} />,
                <button onClick={this.deleteRow} className="btn btn-outline-danger mb-3">Delete row</button>,
                <HeaderTitles colClasses={this.colClasses} activeTitles={this.props.activeTitles} activeTitle={this.props.activeTitle} activeTitleIsUp={this.props.activeTitleIsUp} onClick={this.onTittleClick} list={this.props.activeColumns} />,
                <HeaderSearches colClasses={this.colClasses} onClick={this.onTittleSearch} list={this.props.activeColumns}/>,
              ]}
             />,
            body: 
            <DatagridTable 
              colClasses={this.colClasses}
              onClick={this.onRowClick}
              activeColumns={this.props.activeColumns}
              todo={this.props.todoToRender}  
            />
          }} 
        /> 
        : 'Processing...' 
      }
      </div>
    )

  }
}

export default App;
