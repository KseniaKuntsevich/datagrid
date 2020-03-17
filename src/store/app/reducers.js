import {
	CHANGE_TODO_TO_RENDER, 
	CHANGE_TODO,
	CHANGE_ACTIVE_TITLE,
	CHANGE_ACTIVE_TITLE_IS_UP,
	CHANGE_IS_TODO_LOADED,
	CHANGE_ACTIVE_COLUMNS,
	CHANGE_COLUMNS_STATUS,
	CHANGE_ACTIVE_TITLES
} from './actions'

const defaultState = {
  activeTitle: localStorage.getItem('activeTitle') || 'id',
  activeTitleIsUp: localStorage.getItem('activeTitleIsUp') === 'true',
  isTodoLoaded: localStorage.getItem('isTodoLoaded') || null,
  todo: JSON.parse(localStorage.getItem('todo')) || null,
  todoToRender : JSON.parse(localStorage.getItem('todoToRender')) || null,
  activeColumns: JSON.parse(localStorage.getItem('activeColumns'))  || null,
  columnsStatus: JSON.parse(localStorage.getItem('columnsStatus')) || null,
  activeTitles: []
}


export const appReducer = (state = defaultState, action) => {
	switch(action.type) {
		case CHANGE_TODO:
		    return {
		    	...state,
		    	todo: action.payload
		    };

		case CHANGE_TODO_TO_RENDER:
		    return {
		    	...state,
		    	todoToRender: action.payload
		    };

		case CHANGE_ACTIVE_TITLE:
		    return {
		    	...state,
		    	activeTitle: action.payload
		    };
		case CHANGE_ACTIVE_TITLE_IS_UP:
		    return {
		    	...state,
		    	activeTitleIsUp: action.payload
		    };

	    case CHANGE_IS_TODO_LOADED:
		    return {
		    	...state,
		    	isTodoLoaded: action.payload
		    };
		case CHANGE_ACTIVE_COLUMNS:
		    return {
		    	...state,
		    	activeColumns: action.payload
		    };
		case CHANGE_COLUMNS_STATUS:
		    return {
		    	...state,
		    	columnsStatus: action.payload
		    };
		case CHANGE_ACTIVE_TITLES:
		    return {
		    	...state,
		    	activeTitles: action.payload
		    };
		default: ;
	}
	return state
}