import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    username:'',
    nickname:'',
    sex:'',
    club:'',
    profile_path:'',
    birthday:'',
    introduce:'',
    vip:'',
    administrator:'',
});

const changeUserData =(state,action) =>{
    return state.merge({
        username:fromJS(action.username),
        nickname:fromJS(action.nickname),
        sex:fromJS(action.sex),
        club:fromJS(action.club),
        profile_path:fromJS(action.profile_path),
        birthday:fromJS(action.birthday),
        introduce:fromJS(action.introduce),
        vip:fromJS(action.vip),
        administrator:fromJS(action.administrator)
    });
};

const modifiedUser =(state,action) =>{
    return state.merge({
        nickname:fromJS(action.nickname),
        sex:fromJS(action.sex),
        birthday:fromJS(action.birthday),
        introduce:fromJS(action.introduce)
    });
};

export default (state = defaultState,action) => {
    switch(action.type){
        case constants.CHANGE_USER_DATA:
        return changeUserData(state,action);
        case constants.MODIFIED_USER:
            return modifiedUser(state,action);
        default:return state;
    }
}
