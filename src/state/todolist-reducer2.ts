import {TodolistType} from "../App";
import {v1} from "uuid";


export const todolistsReducer2 = (state: TodolistType[], action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id !== action.payload.id)
        }
        case "ADD-TODOLIST": {
            let newTodolistId = v1()
            let newTodolist = {id: newTodolistId, title: action.payload.title, filter: 'all'}
            return [newTodolist, ...state]
        }
        default: {
            return state
        }
    }
}

export type  ActionsType = RemoveTodolistACType | AddTodolistACType

export type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {id}
    } as const
}

export type AddTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {title}
    } as const
}