import React , { Component }from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions, Text, DatePickerAndroid,TextInput,KeyboardAvoidingView} from 'react-native';
import {connect} from 'react-redux';
import { actionCreators } from '../loginScreen/store';
import {PullPicker} from 'teaset';
import DatePicker from './components/datePicker';
import ClubPicker from './components/clubPicker';
import FontAwesome from './index';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class BasicInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname:'',
            introduce:'',
        };
    };
    render() {
        const items_sex = ['先生','女士'];
        const { selectedIndex,checkState2 ,username,password,currentClub,nickname,sex,birthday,introduce} = this.props;
        return (
            <KeyboardAvoidingView
                keyboardVerticalOffset={screenHeight*0.01}
                behavior='padding'
                style={styles.container}>
                <View style={styles.alineSty}>
                    <TextInput
                        style={{ height: screenHeight*0.06,width:screenWidth*0.6,fontSize: 18,color:'#fff',textAlign: 'center'}}
                        onChangeText={text => this.setState({nickname: text})}
                        maxLength={15}
                        placeholder={"请输入你的昵称"}
                        placeholderTextColor={'#fff'}
                        onBlur={()=>{this.props.checknickname(this.state.nickname)}}
                    />
                </View>
                <View style={styles.alineSty}>
                    <TouchableOpacity
                        style={styles.sexSelect}
                        onPress={()=>PullPicker.show(
                            '选择你的性别',
                            items_sex,
                            selectedIndex,
                            (item) => this.props.changeSelectedSex(item)
                        )}>
                        <Text style={{color:'#fff',fontSize:18}}>选择你的性别:{sex}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.alineSty}>
                    <View style={{height: screenHeight*0.06,width:screenWidth*0.6,alignItems:'center'}}>
                        <DatePicker/>
                    </View>
                </View>
                <View style={styles.alineSty}>
                    <View style={{height: screenHeight*0.06,width:screenWidth*0.7,alignItems:'center'}}>
                        <ClubPicker/>
                    </View>
                </View>
                <View style={styles.alineSty}>
                    <View style={{height: screenHeight*0.06,width:screenWidth*0.6,alignItems:'center'}}>
                        <TextInput
                            style={{ height: screenHeight*0.06,width:screenWidth*0.6,fontSize: 18,color:'#fff',textAlign: 'center'}}
                            onChangeText={text => this.setState({introduce: text})}
                            maxLength={30}
                            placeholder={"请简单的介绍一下自己"}
                            placeholderTextColor={'#fff'}
                            onBlur={()=>{this.props.changeIntroduce(this.state.introduce)}}
                        />
                    </View>
                </View>
                <View style={styles.alineSty}>
                    {
                        checkState2?
                            <View style={styles.onloadtro}>
                                <TouchableOpacity
                                    onPress={
                                        ()=>{
                                            this.props.Regist(username,password,currentClub,nickname,sex,birthday,introduce);
                                            this.props.navigation.popToTop();
                                        }
                                    }
                                    style={styles.onload}
                                >
                                    <Text style={{fontSize:23}}>注 册</Text>
                                </TouchableOpacity>
                            </View>:null
                    }
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:screenWidth,
        height:screenHeight,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        // paddingHorizontal:200,
    },
    textSty:{
        color:'#fff',
        fontSize:20
    },
    alineSty:{
        flexDirection:'row',
        marginBottom:screenHeight*0.02,
        alignItems:'center'
    },
    sexSelect:{
        color:'#fff',
        width:screenWidth*0.6,
        height:screenHeight*0.06,
        justifyContent:'center',
        alignItems:'center'
    },
    onload:{
        width:screenWidth*0.21,
        height:screenHeight*0.12,
        backgroundColor:'#fff',
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
    },
    onloadtro:{
        marginTop:screenHeight*0.05,
        borderRadius:50,
    },
});

const mapState = (state) => ({
    username:state.getIn(['login','username']),
    password:state.getIn(['login','password']),
    currentClub:state.getIn(['login','currentClub']),
    nickname:state.getIn(['login','nickname']),
    sex:state.getIn(['login','sex']),
    birthday:state.getIn(['login','birthday']),
    introduce:state.getIn(['login','introduce']),
    checkState2:state.getIn(['login','checkState2']),
});

const mapDispath = (dispatch) => {
    return {
        changeSelectedSex(sex){
            dispatch(actionCreators.changeSelectedSex(sex));
        },
        checknickname(nickname){
            dispatch(actionCreators.checknickname(nickname));
        },
        changeIntroduce(introduce){
            dispatch(actionCreators.changeIntroduce(introduce));
        },
        Regist(username,password,currentClub,nickname,sex,birthday,introduce){
            dispatch(actionCreators.Regist(username,password,currentClub,nickname,sex,birthday,introduce));
        }
    }
};

export default connect(mapState,mapDispath)(BasicInfo);
