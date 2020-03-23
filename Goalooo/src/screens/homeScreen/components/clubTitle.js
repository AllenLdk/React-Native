import React , { Component }from 'react';
import {View, TouchableOpacity,Text,Image,ProgressBarAndroid, StyleSheet,Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class ClubTitle extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*<ImageBackground source={require('../../../repository/images/home/Background.jpg')} style={styles.backgroundImg}>*/}
                    <View style={styles.titleContainer}>
                        <Image source={require('../../../repository/images/home/barca.jpg')} style={styles.clubImg}/>
                        <Text style={styles.clubNameSty}>巴塞罗那</Text>
                    </View>
                    <View style={styles.signSty}>
                        <View style={{flexDirection:'column'}}>
                        {/*设置等级以及等级称号*/}
                            <View style={{flexDirection:'row',justifyContent:'space-around',height:20}}>
                                <Text style={styles.levelSty}>LV1</Text>
                                <Text style={styles.levelNameSty}>足球小白</Text>
                            </View>
                                <ProgressBarAndroid
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={0.5}
                                    color={'#3e82e9'}
                                />
                        </View>
                        <TouchableOpacity
                            style={{backgroundColor:'#2d62b2',justifyContent:'center',alignItems:'center',borderRadius:5,marginLeft:30,width:40,height:30}}
                        >
                            <Text style={{color:'#fff',fontSize:15}}>签到</Text>
                        </TouchableOpacity>
                    </View>
                {/*</ImageBackground>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:screenHeight*0.1,
        alignItems: 'center'

    },
    levelSty:{
        color:'#fff'
    },
    levelNameSty:{
        color:'#fff',
        marginLeft:10
    },
    titleContainer:{
        flexDirection:'row',
        marginTop:20
    },
    clubNameSty:{
        color:'#fff',
        fontSize:30
    },
    clubImg:{
        width: screenWidth*0.10,
        height: screenWidth*0.10,
        marginRight:10,
    },
    signSty:{
        marginTop:15,
        // width:screenWidth*0.6*0.6,
        // height:screenHeight*0.05,
        flexDirection:'row',
        justifyContent:'space-between',
    },
});
