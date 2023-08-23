import {TodolistType} from "../App";
import {v1} from "uuid";

type ActionType = {
    type: string
    [key: string]: any
}

export const todolistReducer = (state: TodolistType[], action: ActionType):TodolistType[]=> {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id !== action.id)
        }
        case 'ADD-TODOLIST': {
            let newTodolist:TodolistType  = {id: v1(), title: action.title, filter: 'all'}
            return [...state, newTodolist]
        }

        default: {
            return state
        }
    }
}
