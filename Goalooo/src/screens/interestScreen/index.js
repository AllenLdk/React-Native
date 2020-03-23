import React ,{ Component } from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, SectionList} from 'react-native';
import {connect} from 'react-redux';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { actionCreators } from '../store';

class EditUser extends Component {
    render(){
        const { userId,username,club,nickname,sex,profile_path,vip,birthday,introduce } = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.profileSty}>
                    <View style={styles.profile}>
                        <Image style={styles.profileImg} source={{uri:profile_path}}/>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000',
        width: screenWidth,
        height: screenHeight
    },
    profileSty:{
        alignItems:'center',
        marginTop:screenHeight*0.1
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
});

const mapState = (state) => ({
    userId:state.getIn(['login','userId']),
    username:state.getIn(['login','username']),
    club:state.getIn(['login','club']),
    nickname:state.getIn(['login','nickname']),
    sex:state.getIn(['login','sex']),
    profile_path:state.getIn(['login','profile_path']),
    vip:state.getIn(['login','vip']),
    birthday:state.getIn(['login','birthday']),
    introduce:state.getIn(['login','introduce']),
});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState,mapDispatch)(EditUser);
