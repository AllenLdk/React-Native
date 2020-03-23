import * as React from 'react';
import * as constants from './constants';
import { instance }  from '../../../../service/https';
import { ToastAndroid,Alert } from 'react-native';

//用户登陆
export const login = (username,password) => {
    return (dispatch) => {
    if(username === ''||password === ''){
        Alert.alert(
            'Goalooo通知',
            '您还没有输入用户名和密码！',
            [
                {text: '马上输入'},
            ],
            { cancelable: false }
        )
    }else{
            instance.post('/login', {
                params:{
                    username: username,
                    password: password
                }
            })
                .then(function (res) {
                    if(res.data===false){
                        Alert.alert(
                            'Goalooo通知',
                            '您的用户名或密码有误！',
                            [
                                {text: '知道了'},
                            ],
                            { cancelable: false }
                        )
                    }else{
                        dispatch(changeLogin(res.data[0].username,res.data[0].id,res.data[0].club,
                            res.data[0].nickname,res.data[0].sex,res.data[0].profile_path,
                            res.data[0].birthday,res.data[0].vip, res.data[0].introduce,
                            res.data[0].administrator));
                        Alert.alert(
                            'Goalooo通知',
                            '欢迎您！'+res.data[0].nickname+res.data[0].sex,
                            [
                                {text: '点击开始社区生活'},
                            ],
                            { cancelable: false }
                        )
                    }

                })
                .catch(function (err) {
                    Alert.alert(
                        'Goalooo通知',
                        '登录获取后台服务器出错！'+err,
                        [
                            {text: '知道了'},
                        ],
                        { cancelable: false }
                    )
                });
        }
    }
};
//用户登录成功，改变用户的界面
const changeLogin = (username,id,club,nickname,sex,profile_path,birthday,vip,introduce,administrator) => ({
    type:constants.CHANGE_LOGIN,
    loginState:true,
    username:username,
    user_id:id,
    club:club,
    nickname:nickname,
    sex:sex,
    profile_path:profile_path,
    birthday:birthday,
    vip:vip,
    introduce:introduce,
    administrator:administrator
});
//用户注册信息检测
export const Specification_test = (username,password,repeat_password) => {
    console.log(username,password,repeat_password);
    return (dispatch) => {
        if(username===''||password===''||repeat_password===''){
            ToastAndroid.showWithGravity("你还有信息没有填写！", ToastAndroid.LONG, ToastAndroid.BOTTOM);
            dispatch(change_UserStateFalse());
        }else{
            if(username.length<6||password.length<6){
                ToastAndroid.showWithGravity("用户名或密码的长度不合要求！", ToastAndroid.LONG, ToastAndroid.BOTTOM);
                dispatch(change_UserStateFalse());
            }else{
                if(password!==repeat_password){
                    ToastAndroid.showWithGravity("两次输入的密码不一致！", ToastAndroid.LONG, ToastAndroid.BOTTOM);
                    dispatch(change_UserStateFalse());
                }else{
                    dispatch(change_UserState(username,password));
                }
            }
        }
    }
};

//信息检测通过，改变检测状态为true
const change_UserState = (username,password) => ({
    type:constants.CHANGE_USERSTATE,
    checkState1:true,
    username:username,
    password:password

});

//用户信息检测未通过，改变检测状态为false
const change_UserStateFalse = () => ({
    type:constants.CHANGE_USERSTATEFALSE,
    checkState1:false,
    username:'',
    password:''
});

//选择自己的性别的方法
export const changeSelectedSex = (sex) => ({
    type:constants.CHANGE_SELECTED_SEX,
    sex:sex
});

//获取俱乐部数据
export const getClubData = () => {
    return (dispatch) => {
        instance.get('/getClubList').then(function (res) {
            dispatch(changeClubListData(res.data));
        }).catch(function (err) {
            Alert.alert(
                'Goalooo通知',
                '获取俱乐部数据出错！'+err,
                [
                    {text: '知道了'},
                ],
                { cancelable: false }
            )
        });
    }
};

//改变state中的俱乐部数据
const changeClubListData = (clubList) =>({
    type:constants.CHANGE_CLUBLIST_DATA,
    clubList:clubList
});

//改变当前选中的俱乐部名
export const changeCurrentClub =(currentClub) =>({
    type:constants.CHANGECURRENTCLUB,
    currentClub:currentClub
});

//修改昵称并更改状态
export const checknickname = (nickname) =>{
    return (dispatch) =>{
        if(nickname===''){
            ToastAndroid.showWithGravity("你还没有输入昵称！", ToastAndroid.LONG, ToastAndroid.BOTTOM);
        }else{
            dispatch(changeNickname(nickname));
        }
    }
};

//修改state中的birthday
export const changeBirthday = (birthday) =>({
    type:constants.CHANGE_BIRTHDAY,
    birthday:birthday
});

//修改nickname的方法
export const changeNickname = (nickname) =>({
    type:constants.CHANGE_NICKNAME,
    checkState2:true,
    nickname:nickname
});

//修改state中的introduce
export const changeIntroduce = (introduce)=> ({
    type:constants.CHANGE_INTRODUCE,
    introduce:introduce
});

//注册方法
export const Regist = (username,password,currentClub,nickname,sex,birthday,introduce) => {
    return (dispatch) => {
        //向后台发送注册数据
        instance.post('/regist',{
            params:{
                username:username,
                password:password,
                currentClub:currentClub,
                nickname:nickname,
                sex:sex,
                birthday:birthday,
                introduce:introduce
            }
        }).then(function (res) {
            console.log(res);
            if(res.data===true){
                Alert.alert(
                    'Goalooo通知',
                    '您已经成功注册了Goalooo社区账户，请登录开始社区生活吧！',
                    [
                        {text: '确定'},
                    ],
                    { cancelable: false }
                )
            }else{
                Alert.alert(
                    'Goalooo通知',
                    '该用户名不可用！',
                    [
                        {text: '知道了'},
                    ],
                    { cancelable: false }
                )
            }
        }).catch(function (err) {
            Alert.alert(
                'Goalooo通知',
                '注册连接到服务器出错！'+err,
                [
                    {text: '知道了'},
                ],
                { cancelable: false }
            )
        });
    }
};
