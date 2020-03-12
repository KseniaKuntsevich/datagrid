import {
	CHANGE_TODO_TO_RENDER, 
	CHANGE_TODO,
	CHANGE_ACTIVE_TITLE,
	CHANGE_ACTIVE_TITLE_IS_UP,
	CHANGE_IS_TODO_LOADED
} from './actions'

const defaultState = {
  activeTitle: 'id',
  activeTitleIsUp: false,
  isTodoLoaded: null,
  todo: null,
  todoToRender : null
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
	}
	return state
}