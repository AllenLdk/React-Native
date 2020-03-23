import React , { Component }from 'react';
import {View,Text, StyleSheet,Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class NoticeBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.a_LineSty}>
                    <Text style={styles.topSty}>【置顶】&nbsp;</Text>
                    <Text >祝：杰拉德皮克33岁生日快乐！</Text>
                </Text>
                <View style={styles.lineSty}></View>
                <Text style={styles.a_LineSty}>
                    <Text style={styles.topSty}>【热点】&nbsp;</Text>
                    <Text>祝：杰拉德皮克33岁生日快乐！</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:screenWidth*0.9,
        height:screenHeight*0.12,
        borderRadius:10,
        marginTop:5
    },
    a_LineSty:{
        color:'#fff',
        fontSize:14,
        marginTop:screenHeight*0.015,
        marginLeft:screenWidth*0.02,
        alignSelf:'flex-start'
    },
    topSty:{
        color:'#304664',
    },
    lineSty:{
        borderColor:'#212121',
        borderWidth:1,
        width: screenWidth*0.7*0.9,
        marginLeft:(screenWidth*0.7-screenWidth*0.7*0.9)/2,
        marginTop:screenHeight*0.01
    }
});
