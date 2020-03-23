import React , { Component }from 'react';
import {View,Text, Image, StyleSheet,Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Button,Label } from 'teaset';

export default class TalkScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imgStyle} source={require('../../../repository/images/notification/talk.png')}/>
                <Text style={styles.textSty}>海内存知己，天涯若比邻！</Text>
                <Button style={styles.butSty}>
                    <Label style={{color: '#fff', fontSize: 16, paddingLeft: 8}} text='戳这里开始和朋友聊球！' />
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#000000',
        width:screenWidth,
        height:screenHeight,
        marginTop:screenHeight*0.20,
    },
    textSty:{
        color:'#fff',
        marginBottom:20,
        fontSize:17,
        marginLeft:screenWidth*0.27
    },
    imgStyle:{
        height:100,
        width:100,
        marginLeft:screenWidth*0.38,
        marginBottom: 30
    },
    butSty:{
        backgroundColor: '#29abe2',
        height:45,
        marginLeft:screenWidth*0.2,
        width: screenWidth*0.6,
        borderRadius:20
    }
});



