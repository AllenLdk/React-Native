import React ,{ Component } from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { actionCreators } from '../store';

class UserMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:this.props.username,
        };
    };
    //获取用户数据
    componentDidMount(): void {
        this.props.getUserData(this.state.username);
    }
    render(){
        const { userId,username,club,nickname,sex,profile_path,vip,birthday,introduce } = this.props;

        return(
            <ScrollView style={styles.screenControl}>
                <View style={styles.allUserMessage}>
                    <TouchableOpacity style={styles.UserStyle} onPress={() => this.props.navigate("EditUser")}>
                        <View style={styles.UserLeftStyle}>
                            <Text style={styles.usernameColor}>{nickname}</Text>
                            <Text style={styles.textColor}>查看并编辑个人资料</Text>
                        </View>
                        <View style={styles.profile}>
                            {profile_path?
                                <Image style={styles.profileImg} source={{uri:profile_path}}/>
                                :
                                <Image style={styles.profileImg} source={{uri:'http://www.allenweb.cn:8080/GoaloooImg/profile/defaultProfile.jpg'}}/>
                            }
                        </View>
                    </TouchableOpacity>
                    <View style={styles.userFunction}>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                        >
                            <Text style={{color:'#b2b2b2',fontSize:14}}>123</Text>
                            <Text style={{color:'#b2b2b2',fontSize:18}}>关注</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                        >
                            <Text style={{color:'#b2b2b2',fontSize:14}}>222</Text>
                            <Text style={{color:'#b2b2b2',fontSize:18}}>粉丝</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                        >
                            <Text style={{color:'#b2b2b2',fontSize:14}}>1589</Text>
                            <Text style={{color:'#b2b2b2',fontSize:18}}>帖子</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:screenWidth,height:4,backgroundColor: "#141414"}}></View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    screenControl:{
        height:screenHeight*0.25,
        width:screenWidth*0.95,
        marginLeft:10,
        marginTop:20,
        flexDirection:'column',
        flex:1,
    },
    allUserMessage:{
        height:screenHeight*0.24,
        backgroundColor:'#000',
        justifyContent:'space-between',
        flexDirection:'column',
        flex:1
    },
    usernameColor:{
        color:'#b2b2b2',
        fontSize:screenWidth*0.07,
        width:screenWidth*0.5,
        height:screenHeight*0.06,
    },
    UserLeftStyle:{
        marginLeft:20,
        marginTop:10
    },
    textColor:{
        marginTop:5,
        marginLeft:5,
        color:'#b2b2b2',
    },
    profile:{
        width:screenHeight*0.13,
        height:screenHeight*0.13,
        borderWidth: 2,
        borderColor:'#b2b2b2',
        borderRadius:50,
        overflow:'hidden',
        marginRight:10,
    },
    profileImg:{
        width:screenHeight*0.13,
        height:screenHeight*0.13,
    },
    UserStyle:{
        width:screenWidth*0.94,
        height:screenHeight*0.14,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    userFunction:{
        width:screenWidth*0.95,
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
    },
    buttonStyle:{
        width:screenWidth*0.94/3,
        fontSize:25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listFunction:{
        width:screenWidth*0.94,
    }
});

const mapState = (state) => ({
    username:state.getIn(['login','username']),
    club:state.getIn(['mine','club']),
    nickname:state.getIn(['mine','nickname']),
    sex:state.getIn(['mine','sex']),
    profile_path:state.getIn(['mine','profile_path']),
    vip:state.getIn(['mine','vip']),
    birthday:state.getIn(['mine','birthday']),
    introduce:state.getIn(['mine','introduce']),
});

const mapDispatch = (dispatch) => ({
    getUserData(username){
        dispatch(actionCreators.getUserData(username));
    }
});

export default connect(mapState,mapDispatch)(UserMessage);
