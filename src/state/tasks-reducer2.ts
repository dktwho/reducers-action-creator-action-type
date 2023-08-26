import {FilterValuesType, TasksStateType} from "../App";
import {v1} from "uuid";


export const tasksReducer2 = (state: TasksStateType, action: ActionsType2): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return {...state, [action.payload.todolistId] : state[action.payload.todolistId].filter(task => task.id !== action.payload.taskId ) }
        }

        default: {
            return state
        }
    }
}


export type ActionsType2 = RemoveTaskACType


export type  RemoveTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (taskId: string, todolistId: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {taskId, todolistId}
    } as const
}


