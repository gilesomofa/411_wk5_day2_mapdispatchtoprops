import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
    const cars = (state = [], action) => {
        switch(action.type) {
            case 'ADD_CAR':
                return (`[ ...state, action.value ]`)
                
                console.log(...state,action.value)

            case 'REMOVE_CAR':
                return ( `[...state,action.value ]`)
                const newState = [...state]
                let carToDeleteId = newState.action.value.find(id) 
                //use find method to locate objects id which matches action value 
                //save this object as a variable 
                let indexOfCarToDelete = carToDeleteId.indexOf(carToDeleteId)
                // use indexOf() and pass it into .splice
                  newState.splice(i)
                  return newState
                console.log(...state,action.value)
        }
    }
    return state
}

export default combineReducers({ user, cars })