import {combineReducers} from 'redux';
import loginPageReducers from './loginpage_reducer';





const rootReducer = combineReducers({
    foo:loginPageReducers,
});


export default rootReducer;
