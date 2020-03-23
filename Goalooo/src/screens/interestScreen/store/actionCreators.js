import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';
import {Net_Get} from '../../../../service/http';

// 选择自己的性别的状态
export const changeSelectedSex = (sex) => ({
    type:constants.CHANGE_SELECTED_SEX,
    value:sex
});
// 选择喜欢的俱乐部的状态
export const changeSelectedClub = (club) => ({
    type:constants.CHANGE_SELECTED_CLUB,
    value:club
});

//获取性别列表
export const getSexList = () =>{
    return (dispatch)=>{
        Net_Get('sex.json').then((res) => {
            let SexList = res.data.data.Sex;
            dispatch(changeSexList(SexList));
        });
    }
};

export const changeSexList = (SexList) =>({
    type:constants.CHANGE_SEX_LIST,
    SexList:SexList
});

//获取俱乐部列表
export const getClubList = () =>{
    return (dispatch)=>{
        Net_Get('club.json').then((res) => {
            let ClubList = res.data.data.Club;
            dispatch(changeClubList(ClubList));
        });
    }
};

export const changeClubList = (ClubList) =>({
    type:constants.CHANGE_CLUB_LIST,
    ClubList:ClubList
});
