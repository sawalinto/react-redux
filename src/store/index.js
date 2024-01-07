import { combineReducers, createStore } from "redux";

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
    const {type} =action
    switch(type){
        default:
            return state
    }
}

const rootReducer = combineReducers({
    lists: listReducer
})
const store = createStore()
export default store