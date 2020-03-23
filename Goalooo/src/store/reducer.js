import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../screens/homeScreen/store';
import { reducer as loginReducer } from '../screens/loginScreen/store';
import { reducer as discoveryReducer } from '../screens/homeScreen/store';
import { reducer as notificationReducer } from '../screens/homeScreen/store';
import { reducer as mineReducer } from '../screens/mineScreen/store';


const reducer =  combineReducers({
    login:loginReducer,
    home:homeReducer,
    discovery:discoveryReducer,
    notification:notificationReducer,
    mine:mineReducer,
});

export default reducer;
