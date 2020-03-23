import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    username:'',
    password:'',
    userId:1,
    club:'',
    nickname:'',
    sex:'先生',
    profile_path:'',
    vip:'',
    birthday:'',
    introduce:'',
    administrator:'',
    loginState:false,
    checkState1:false,
    checkState2:false,
    clubList:['黎东珂'],
    currentClub:'巴塞罗那'
});


const changeLoginData = (state,action) => {
    return state.merge({
        loginState:fromJS(action.loginState),
        userId:action.id,
        username:fromJS(action.username),
        club:fromJS(action.club),
        nickname:fromJS(action.nickname),
        sex:fromJS(action.sex),
        vip:fromJS(action.vip),
        profile_path:action.profile_path,
        birthday:fromJS(action.birthday),
        introduce:action.introduce,
        administrator:action.administrator
    });
};

//注册第一步（用户名，密码的改变）(改变为true或false都为这一个方法)
const changeUserData = (state,action) => {
    return state.merge({
        checkState1:fromJS(action.checkState1),
        username:fromJS(action.username),
        password:fromJS(action.password),
    });
};

//改变选中的性别
const changeSelectSex = (state,action) => {
    return state.merge({
        sex:fromJS(action.sex),
    });
};

//注册第二部
const changeNickname = (state,action) => {
    return state.merge({
        nickname:fromJS(action.nickname),
        checkState2:fromJS(action.checkState2),
    });
};

export default (state = defaultState,action) => {
    switch(action.type){
        case constants.CHANGE_LOGIN:
            return changeLoginData(state,action);
        case constants.CHANGE_USERSTATE:
            return changeUserData(state,action);
        case constants.CHANGE_USERSTATEFALSE:
            return changeUserData(state,action);
        case constants.CHANGE_SELECTED_SEX:
            return changeSelectSex(state,action);
        case constants.CHANGE_CLUBLIST_DATA:
            return state.set('clubList',action.clubList);
        case constants.CHANGECURRENTCLUB:
            return state.set('currentClub',action.currentClub);
        case constants.CHANGE_BIRTHDAY:
            return state.set('birthday',action.birthday);
        case constants.CHANGE_NICKNAME:
            return changeNickname(state,action);
        case constants.CHANGE_INTRODUCE:
            return state.set('introduce',action.introduce);
        default:return state;
    }
}
