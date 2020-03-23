import React, {Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import Picker from 'react-native-picker';
import {actionCreators} from '../../loginScreen/store';
import {connect} from 'react-redux';


class ClubPicker extends Component{
    componentDidMount(): void {
        this.props.getClubData();
    }

    //打开俱乐部选择视图
    _showClubPicker(clubList) {
        Picker.init({
            pickerTitleText:'选择你喜欢的俱乐部',
            pickerCancelBtnText:'取消',
            pickerConfirmBtnText:'确定',
            selectedValue:['西班牙足球甲级联赛','巴塞罗那'],
            pickerBg:[0,0,0,1],
            pickerToolBarBg:[8,46,84,1],
            pickerConfirmBtnColor:[255,255,255,1],
            pickerCancelBtnColor:[255,255,255,1],
            pickerTitleColor:[255,255,255,1],
            pickerData: this._createClubData(clubList),
            pickerFontColor: [255, 255 ,255, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                this.props.changeCurrentClub(pickedValue[1]);
            },
        });
        Picker.show();
    }
    _createClubData(clubList){
        //联赛去重
        let league = [];
        for(let i=0;i<clubList.length;i++){
            league[i]=clubList[i].league;
        }
        let league_duplicate = [...new Set(league)] ;
        //构建picker所需要的数据格式
        let league_arr = [];
        for(let j=0;j<league_duplicate.length;j++){
            let clubname=[];
            for(let k=0;k<clubList.length;k++){
                if(clubList[k].league===league_duplicate[j]){
                    clubname.push(clubList[k].clubname)
                }
            }
            let league_obj={};
            league_obj[league_duplicate[j]]=clubname;
            league_arr.push(league_obj);
        }
        return league_arr;
    }
    render(){
        const {clubList,currentClub} = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={()=>this._showClubPicker(clubList)}>
                        <Text style={styles.textStyle}>选择喜欢的俱乐部:{currentClub}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textStyle:{
        fontSize:18,
        color:'#fff'
    }
});

const mapState = (state) => ({
    clubList:state.getIn(['login','clubList']),
    currentClub:state.getIn(['login','currentClub'])
});

const mapDispath = (dispatch) => {
    return {
        getClubData(){
            dispatch(actionCreators.getClubData());
        },
        changeCurrentClub(currentClub){
            dispatch(actionCreators.changeCurrentClub(currentClub))
        }
    }
};

export default connect(mapState,mapDispath)(ClubPicker);
