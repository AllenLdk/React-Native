import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    selectedSex:'你是男球迷还是女球迷',
    selectedClub:'你最喜欢哪个足球俱乐部',
    SexList:[],
    ClubList:[],
    InterestCheck:false,
});


export default (state = defaultState,action) => {
    switch(action.type){
        case constants.CHANGE_SELECTED_SEX:
            return state.set('selectedSex',action.value);
        case constants.CHANGE_SELECTED_CLUB:
            return state.set('selectedClub',action.value);
        case constants.CHANGE_SEX_LIST:
            return state.set('SexList',action.SexList);
        case constants.CHANGE_CLUB_LIST:
            return state.set('ClubList',action.ClubList);
        default:return state;
    }
}
