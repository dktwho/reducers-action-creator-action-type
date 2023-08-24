import {v1} from "uuid";
import {TodolistType} from "../App";
import {addTodolistAC, removeTodolistAC, todolistsReducer2} from "./todolist-reducer2";
import {AddTodolistAC, todolistReducer} from "./todolist-reducer";

test('correct todolist should be removed', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ]

     const endState = todolistsReducer2(startState,removeTodolistAC(todolistId1))


    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistId2)
})

test('correct todolist should be added', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()

    let newTodolistTitle = 'New Todolist'

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ]

     const endState = todolistsReducer2(startState, addTodolistAC(newTodolistTitle))


    expect(endState.length).toBe(3)
    expect(endState[0].title).toBe(newTodolistTitle)
    expect(endState[0].filter).toBe('all')
})