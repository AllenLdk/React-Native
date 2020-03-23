import React , { Component }from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions, Image, Text,TextInput,KeyboardAvoidingView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import { actionCreators } from '../loginScreen/store';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class RegistScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            repeat_password:''
        };
    };
    static navigationOptions = {
        title:'用户注册',
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render() {
        return (
            <KeyboardAvoidingView
                behavior='padding'
                style={styles.container}>
            <View style={styles.container}>
                    <View style={styles.profile}>
                        <Image source={require('../../repository/images/logo_new.png')}/>
                    </View>
                    <View style={styles.user}>
                        <TextInput
                            placeholderTextColor={'#b2b2b2'}
                            maxLength={14}
                            style={styles.username}
                            placeholder={'用户名/手机号/邮箱(6-14位英文或数字)'}
                            onChangeText={text => this.setState({username: text})}
                            onBlur={() => {this.props.Specification_test(this.state.username,this.state.password,this.state.repeat_password);}}
                        />
                        <TextInput
                            placeholderTextColor={'#b2b2b2'}
                            maxLength={12}
                            secureTextEntry={true}//是否隐藏
                            style={styles.password}
                            placeholder={'输入密码(6-12位字符)'}
                            onChangeText={text => this.setState({password: text})}
                            onBlur={() => {this.props.Specification_test(this.state.username,this.state.password,this.state.repeat_password);}}
                        />
                        <TextInput
                            placeholderTextColor={'#b2b2b2'}
                            maxLength={12}
                            secureTextEntry={true}//是否隐藏
                            style={styles.password}
                            placeholder={'请确认密码(请确保两次输入的密码一致)'}
                            onChangeText={text => this.setState({repeat_password: text})}
                            onBlur={() => {this.props.Specification_test(this.state.username,this.state.password,this.state.repeat_password);}}
                        />
                    </View>
                    {
                        this.props.checkState1?
                            <View style={styles.onloadtro}>
                                <TouchableOpacity
                                    onPress={
                                        ()=>{
                                            this.props.navigation.push("BasicInfo");
                                        }
                                    }
                                    style={styles.onload}
                                >
                                    <FontAwesome
                                        name={'share'}
                                        size={35}
                                        color={'#000'}
                                    />
                                </TouchableOpacity>
                            </View>:
                            <View style={{height:screenHeight*0.15}}></View>
                    }
                    <View style={styles.agreementSty}>
                        <Text style={styles.TextColor}>注册即代表阅读并同意
                            <Text style={{fontWeight:'bold'}}>服务协议</Text>
                            和
                            <Text style={{fontWeight:'bold'}}>社区隐私条款</Text>
                        </Text>
                    </View>
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
        paddingHorizontal:0,
    },
    TextColor:{
        color:'#fff',
        fontSize:16
    },
    agreementSty:{
        marginTop:screenHeight*0.05,
        flexDirection: 'row',
        textAlign:'center',
        justifyContent:'center'
    },
    otherSty:{
        marginTop:screenHeight*0.15,
        flexDirection: 'row',
        textAlign:'center',
        justifyContent:'center'
    },
    onloadtro:{
        marginTop:screenHeight*0.05,
        borderRadius:50,
    },
    onload:{
        width:screenWidth*0.21,
        height:screenHeight*0.12,
        backgroundColor:'#fff',
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
    },
    user:{
        marginTop:screenHeight*0.07,
        alignItems:"center",
    },
    username:{
        width:screenWidth*0.8,
        height: screenHeight*0.08,
        backgroundColor: '#fff',
        color: '#000',
        textAlign: 'center',
        borderRadius:45,
        fontSize:18,
    },
    password:{
        width:screenWidth*0.8,
        height: screenHeight*0.08,
        marginTop:screenHeight*0.05,
        backgroundColor: '#fff',
        color: '#000',
        textAlign: 'center',
        borderRadius:45,
        fontSize:18
    },
    profile:{
        width:screenWidth*0.8,
        alignItems:"center",
    },
});

const mapState = (state) => ({
    checkState1:state.getIn(['login','checkState1']),
});

const mapDispath = (dispatch) => {
    return {
        Specification_test(username,password,repeat_password){
            dispatch(actionCreators.Specification_test(username,password,repeat_password))
        },
        // Regist(username,password){
        //     dispatch(actionCreators.Regist(username,password))
        // }
    }
};

export default connect(mapState,mapDispath)(RegistScreen);
