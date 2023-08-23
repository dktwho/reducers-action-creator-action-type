
import { userReducer } from './user-reducer'

test('user reducer should increment only age', () => {
    const startState = {age: 20, childrenCount: 2, name: 'Dimych'}

    const endState = userReducer(startState, {type: 'INCREMENT-AGE'})

    expect(endState.age).toBe(21)
    expect(endState.childrenCount).toBe(2)
})

test('user reducer should increment only childrenCount', () => {
    const startState = {age: 20, childrenCount: 2, name: 'Dimych'}
    const endState = userReducer(startState, {type: 'INCREMENT-CHILDREN-COUNT'})

    expect(endState.age).toBe(20)
    expect(endState.childrenCount).toBe(3)
    // your code here
})


test('user reducer should be changed name of user', () => {
    const startState = {age: 20, childrenCount: 2, name: 'Dimych'}
    let newName = 'Dmitriy'
    const endState = userReducer(startState, {type: 'CHANGE-NAME', newName: newName})

    expect(endState.age).toBe(20)
    expect(endState.childrenCount).toBe(2)
    expect(endState.name).toBe(newName)
    // your code here
})
