import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const add=(title)=>{
    return{
        type: "ADD",
        payload: title
    }
}

// reducers 
const initialState={
    todos:[
        {
            id:1,
            title: "this is title"
        }
    ]
}
const listReducer = (state = initialState, action)=>{
    const {type, payload} =action
    switch(type){
        case "ADD":
            const newItem={
                id:state.todos.length + 1,
                title: payload
            }
            return{
                ...state,
                todos:[...state.todos, newItem]
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    lists: listReducer
})
const store = createStore(rootReducer, composeWithDevTools())
export default store;