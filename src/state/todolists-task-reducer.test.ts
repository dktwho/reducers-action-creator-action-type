import {TasksStateType, TodolistType} from "../App";
import {addTodolistAC, todolistsReducer2} from "./todolist-reducer2";
import {tasksReducer2} from "./tasks-reducer2";

test('ids should be equals', () => {
    const startTasksState: TasksStateType = {}
    const startTodolistsState: Array<TodolistType> = []

    const action = addTodolistAC('new todolist')

    const endTasksState = tasksReducer2(startTasksState, action)
    const endTodolistsState = todolistsReducer2(startTodolistsState, action)

    const keys = Object.keys(endTasksState)
    const idFromTasks = keys[0]
    const idFromTodolists = endTodolistsState[0].id

    expect(idFromTasks).toBe(action.payload.todolistId)
    expect(idFromTodolists).toBe(action.payload.todolistId)
})
