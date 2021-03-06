import React, {Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import Picker from 'react-native-picker';
import {actionCreators} from '../../loginScreen/store';
import {connect} from 'react-redux';


class DatePicker extends Component{
    //组装日期数据
    _createDateData(){
        let date = [];
        let currDate = new Date();
        let year = currDate.getFullYear();
        let month = currDate.getMonth()+1;
        for(let i=1900;i<=year;i++){
            let month = [];
            for(let j = 1;j<13;j++){
                let day = [];
                if(j === 2){
                    for(let k=1;k<29;k++){
                        day.push(k+'日');
                    }
                    //Leap day for years that are divisible by 4, such as 2000, 2004
                    if(i%4 === 0){
                        day.push(29+'日');
                    }
                }
                else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
                    for(let k=1;k<32;k++){
                        day.push(k+'日');
                    }
                }
                else{
                    for(let k=1;k<31;k++){
                        day.push(k+'日');
                    }
                }
                let _month = {};
                _month[j+'月'] = day;
                month.push(_month);
            }
            let _date = {};
            _date[i+'年'] = month;
            date.push(_date);
        }
        return date;
    }
    //打开日期选择 视图
    _showDatePicker() {
        let year = '';
        let month = '';
        let day = '';
        let dateStr = '1998-06-04';
        year = dateStr.substring(0,4);
        month = parseInt(dateStr.substring(5,7));
        day = parseInt(dateStr.substring(8,10));
        Picker.init({
            pickerTitleText:'选择你的生日',
            pickerCancelBtnText:'取消',
            pickerConfirmBtnText:'确定',
            selectedValue:[year+'年',month+'月',day+'日'],
            pickerBg:[0,0,0,1],
            pickerToolBarBg:[8,46,84,1],
            pickerConfirmBtnColor:[255,255,255,1],
            pickerCancelBtnColor:[255,255,255,1],
            pickerTitleColor:[255,255,255,1],
            pickerData: this._createDateData(),
            pickerFontColor: [255, 255 ,255, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                let year = pickedValue[0].substring(0,pickedValue[0].length-1);
                let month = pickedValue[1].substring(0,pickedValue[1].length-1);
                month = month.padStart(2,'0');
                let day = pickedValue[2].substring(0,pickedValue[2].length-1);
                day = day.padStart(2,'0');
                let str = year+'-'+month+'-'+day;
                this.props.changeBirthday(str);
            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            },
            onPickerSelect: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            }
        });
        Picker.show();
    }
    render(){
        const { birthday } = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={()=>this._showDatePicker()}>
                        <Text style={styles.textStyle}>选择生日：{birthday}</Text>
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
    birthday:state.getIn(['login','birthday']),
});

const mapDispath = (dispatch) => {
    return {
        changeBirthday(str){
            dispatch(actionCreators.changeBirthday(str))
        }
    }
};

export default connect(mapState,mapDispath)(DatePicker);
