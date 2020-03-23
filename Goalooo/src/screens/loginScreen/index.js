import React , { Component }from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions, Image, Text, TextInput, Alert} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import { actionCreators } from './store';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
        };
    };
    static navigationOptions = {
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
            <View style={styles.container}>
                <View>
                    <View style={styles.profile}>
                        <Image source={require('../../repository/images/logo_new.png')}/>
                    </View>
                    <View style={styles.user}>
                        <TextInput
                            placeholderTextColor={'#b2b2b2'}
                            style={styles.username}
                            maxLength={12}
                            placeholder={'用户名/手机号/邮箱'}
                            onChangeText={text => this.setState({username: text})}
                        />
                        <TextInput
                            placeholderTextColor={'#b2b2b2'}
                            maxLength={12}
                            clearButtonMode='always'
                            secureTextEntry={true}//是否隐藏
                            style={styles.password}
                            placeholder={'输入密码'}
                            onChangeText={text => this.setState({password: text})}
                        />
                        <View style={styles.onloadtro}>
                            <TouchableOpacity style={styles.onload}
                                // 登录方法应是传送用户名密码到后台验证，后台判断后传入json数据为true,修改登陆状态
                                onPress={() => this.props.login(this.state.username,this.state.password)}>
                                <FontAwesome
                                    name={'check'}
                                    size={35}
                                    color={'#000'}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.otherSty}>
                        <Text style={styles.TextColor}>忘记密码</Text>
                        <Text style={styles.TextColor}>&emsp;&emsp;|&emsp;&emsp;</Text>
                        <Text style={styles.TextColor} onPress={() => this.props.navigation.navigate('Regist')}>用户注册</Text>
                    </View>
                    <View style={styles.agreementSty}>
                        <Text style={styles.TextColor}>登录即代表阅读并同意<Text style={{fontWeight:'bold'}}>服务协议</Text></Text>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000000',
        width:screenWidth,
        height:screenHeight,
        alignItems:"center",
        paddingTop:screenHeight*0.1
    },
    TextColor:{
        color:'#fff',
        fontSize:16
    },
    agreementSty:{
        marginTop:5,
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
        marginTop:screenHeight*0.1,
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

});

const mapDispath = (dispatch) => {
    return {
        login(username, password){
            dispatch(actionCreators.login(username, password))
        }
    }
};

export default connect(mapState,mapDispath)(LoginScreen);
