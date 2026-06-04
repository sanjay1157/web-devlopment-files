import { createStore } from "redux"

const initialstate = {
    count : 1,

}

function reducer (state= initialstate, action) {

    switch (action.type) {

        case "increment" : 
        return {count : state.count+1}

        case "decrement" :
            return{count : state.count-1}

            default :
            return state
    }


}
export let  store=createStore(reducer)
