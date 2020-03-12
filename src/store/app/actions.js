export const CHANGE_TODO_TO_RENDER = 'CHANGE_TODO_TO_RENDER'
export const CHANGE_TODO = 'CHANGE_TODO'
export const CHANGE_ACTIVE_TITLE = 'CHANGE_ACTIVE_TITLE'
export const CHANGE_ACTIVE_TITLE_IS_UP = 'CHANGE_ACTIVE_TITLE_IS_UP'
export const CHANGE_IS_TODO_LOADED = 'CHANGE_IS_TODO_LOADED'


export const setTodoToRender = todoToRender => ({
	type: CHANGE_TODO_TO_RENDER,
	payload: todoToRender
})

export const setTodo = todo => ({
	type: CHANGE_TODO,
	payload: todo
})


export const setActiveTitle = activeTitle => ({
	type: CHANGE_ACTIVE_TITLE,
	payload: activeTitle
})


export const setActiveTitleIsUp = activeTitleIsUp => ({
	type: CHANGE_ACTIVE_TITLE_IS_UP,
	payload: activeTitleIsUp
})



export const setIsTodoLoaded = isTodoLoaded => ({
	type: CHANGE_IS_TODO_LOADED,
	payload: isTodoLoaded
})

