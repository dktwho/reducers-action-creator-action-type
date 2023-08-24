import {TodolistType} from "../App";


export const todolistsReducer2 = (state: TodolistType[], action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id !== action.payload.id)
        }
        default: {
            return state
        }
    }
}

export type  ActionsType = RemoveTodolistACType

export type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            id
        }
    } as const
}