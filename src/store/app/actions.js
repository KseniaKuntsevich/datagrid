export const CHANGE_TODO_TO_RENDER = 'CHANGE_TODO_TO_RENDER'
export const CHANGE_TODO = 'CHANGE_TODO'
export const CHANGE_ACTIVE_TITLE = 'CHANGE_ACTIVE_TITLE'
export const CHANGE_ACTIVE_TITLE_IS_UP = 'CHANGE_ACTIVE_TITLE_IS_UP'
export const CHANGE_IS_TODO_LOADED = 'CHANGE_IS_TODO_LOADED'
export const CHANGE_ACTIVE_COLUMNS = 'CHANGE_ACTIVE_COLUMNS'
export const CHANGE_COLUMNS_STATUS = 'CHANGE_COLUMNS_STATUS'
export const CHANGE_ACTIVE_TITLES = 'CHANGE_ACTIVE_TITLES'

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

export const setActiveColumns = activeColumns => ({
	type: CHANGE_ACTIVE_COLUMNS,
	payload: activeColumns
})

export const setColumnsStatus = activeColumns => ({
	type: CHANGE_COLUMNS_STATUS,
	payload: activeColumns
})


export const setActiveTitles = activeTitles => ({
	type: CHANGE_ACTIVE_TITLES,
	payload: activeTitles
})

