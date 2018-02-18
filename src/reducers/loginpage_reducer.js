import {SEND_USER} from "../actions";

export default function (state={},action) {
    switch (action.type){
        case SEND_USER:
            return {...state,users:action.payload.data}

    }
    return state;

}
