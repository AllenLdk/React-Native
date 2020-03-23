import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    post:[],    //获取数据
    refreshing: false,      //刷新控制
    fresh: true,        //刷新
    animating: true,
    nomore: false,      //没有更多了
    pageSize: 0,        //需要显示帖子个数
    pageNumber: 1,      //页数,
});


const Refresh = (state,action) => {
    return state.merge({
        pageNumber:fromJS(action.pageNumber),
        nomore:fromJS(action.nomore),
    });
};

export default (state = defaultState,action) => {
    switch(action.type){
        case constants.CHANGE_POST_DATE:
            return state.set('post',action.value);
        case constants.CHANGE_NO_MORE:
            return state.set('nomore',action.nomore);
        case constants.CHANGE_LISTNUMS:
            return state.set('pageSize',action.ListNums);
        case constants.GETMORE_POST_DATE:
            return state.set('post',this.state.post.concat(action.value));
        case constants.CHANGE_NOMORE_AND_PAGE:
            return Refresh(state,action);
        default:return state;
    }
}
