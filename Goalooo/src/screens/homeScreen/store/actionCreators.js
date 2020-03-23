import * as constants from './constants';
import { fromJS } from 'immutable';
import { Net_Get }  from '../../../../service/http';

export const refreshPost = () => ({
    type:constants.CHANGE_NOMORE_AND_PAGE,
    nomore:false,
    pageNumber:1
});

export const changeNomore = (nomore) => ({
    type:constants.CHANGE_NO_MORE,
    nomore:nomore,
});

export const getListNums = (ListNums) =>({
    type:constants.CHANGE_LISTNUMS,
    ListNums:ListNums
});


export const loadPost = (ListNums, pageNumber, fresh) => {
    return (dispatch) => {
        Net_Get('post.json').then((res) => {
            const result = res.data.data.List;
            let nomore;
            if (result.length < ListNums) {
                nomore = true;
                dispatch(changeNomore(nomore))
            } else {
                nomore = false;
                dispatch(changeNomore(nomore))
            }
            if (fresh) {
                dispatch(changePostDate(result));
            } else {
                dispatch(getMorePostDate(result));
            }
        });
    }
};


const changePostDate = (result) => ({
    type:constants.CHANGE_POST_DATE,
    value:result
});

const getMorePostDate = (result) => ({
    type:constants.GETMORE_POST_DATE,
    value:result
});
