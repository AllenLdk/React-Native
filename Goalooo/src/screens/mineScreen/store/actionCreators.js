import * as constants from './constants';
import { instance,Imginstance } from '../../../../service/https';
import axios from 'axios';
import {Alert} from 'react-native';

// 组件构建之后加载用户数据
export const getUserData = (username) => {
    return(dispatch)=>{
        instance.get('/getUserData_Mine',{
            params: {
                username:username,
            }
        }).then(function (res) {
            const result = res.data[0];
            dispatch(changeUserData(result.username,result.nickname,result.sex,result.club,
                result.profile_path,result.birthday,result.introduce,result.vip,
                result.administrator));
        }).catch(function (err) {
            Alert.alert(
                'Goalooo通知',
                '获取用户数据出错！'+err,
                [
                    {text: '知道了'},
                ],
                { cancelable: false }
            )
        });
    }
};

// 修改组件中的用户状态
const changeUserData = (username,nickname,sex,club,profile_path,birthday,introduce,vip,administrator) =>({
    type:constants.CHANGE_USER_DATA,
    username:username,
    nickname:nickname,
    sex:sex,
    club:club,
    profile_path:profile_path,
    birthday:birthday,
    introduce:introduce,
    vip:vip,
    administrator:administrator
});

//将用户提交的数据传输到后台
export const modifiedUserData = (username,nickname,sex,birthday,introduce) =>{
    return (dispatch) =>{
        instance.post('/modifiedUserData', {
            params:{
                username:username,
                nickname: nickname,
                sex:sex,
                birthday:birthday,
                introduce:introduce
            }
        }).then(function (res) {
            if(res.data===true){
                Alert.alert(
                    'Goalooo通知',
                    '保存成功！',
                    [
                        {text: '知道了'},
                    ],
                    { cancelable: false }
                );
                dispatch(modifiedUser(nickname,sex,birthday,introduce));
            }else{
                Alert.alert(
                    'Goalooo通知',
                    '出错了！',
                    [
                        {text: '知道了'},
                    ],
                    { cancelable: false }
                )
            }
        }).catch(function (err) {
            Alert.alert(
                'Goalooo通知',
                '提交用户信息出错！'+err,
                [
                    {text: '知道了'},
                ],
                { cancelable: false }
            )
        });
    }
};

// 修改组件中的用户状态
const modifiedUser = (nickname,sex,birthday,introduce) =>({
    type:constants.MODIFIED_USER,
    nickname:nickname,
    sex:sex,
    birthday:birthday,
    introduce:introduce,
});

export const uploadProfile = (params) =>{
    let ary = params.path.split('/');
    let formData = new FormData();
    let file = {uri: params.path, type: 'multipart/form-data', name: ary[ary.length-1]};
    formData.append("file", file);
  return(dispatch)=>{
      Imginstance.post('/uploadProfile', {
              params:{
                  body: JSON.stringify(formData),
            }
          }).then(function (res) {

      }).catch(function (err) {

      });
  }
};
