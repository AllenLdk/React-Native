import React ,{ Component } from 'react';
import {View , StyleSheet, Dimensions, TouchableOpacity,Text } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import FontAwesome from 'react-native-vector-icons/FontAwesome';


class MineFunction extends Component {
    render(){
        return(
            <View style={styles.allFunStyle}>
                <TouchableOpacity style={styles.funcStyle}>
                    <Text style={styles.allColorText}>
                        <FontAwesome
                            name={'vimeo-square'}
                            size={22}
                        />
                        &nbsp;&nbsp;会员中心</Text>
                    <FontAwesome
                        name={'angle-double-right'}
                        size={22}
                        color={'#b2b2b2'}
                        style={{marginRight:10}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.funcStyle}>
                    <Text style={styles.allColorText}><FontAwesome
                        name={'star'}
                        size={22}
                    />
                        &nbsp;&nbsp;我的收藏</Text>
                    <FontAwesome
                        name={'angle-double-right'}
                        size={22}
                        color={'#b2b2b2'}
                        style={{marginRight:10}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.funcStyle}>
                    <Text style={styles.allColorText}><FontAwesome
                        name={'modx'}
                        size={21}
                    />
                        &nbsp;&nbsp;我的地址</Text>
                    <FontAwesome
                        name={'angle-double-right'}
                        size={22}
                        color={'#b2b2b2'}
                        style={{marginRight:10}}
                    />
                </TouchableOpacity>
                <View style={{width:screenWidth,height:4,backgroundColor: "#141414"}}></View>
                <TouchableOpacity style={styles.funcStyle}>
                    <Text style={styles.allColorText}><FontAwesome
                        name={'flickr'}
                        size={22}
                    />
                        &nbsp;&nbsp;浏览历史</Text>
                    <FontAwesome
                        name={'angle-double-right'}
                        size={22}
                        color={'#b2b2b2'}
                        style={{marginRight:10}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.funcStyle}>
                    <Text style={styles.allColorText}><FontAwesome
                        name={'pencil-square'}
                        size={22}
                    />
                        &nbsp;&nbsp;我的评论</Text>
                    <FontAwesome
                        name={'angle-double-right'}
                        size={22}
                        color={'#b2b2b2'}
                        style={{marginRight:10}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.funcStyle}>
                    <Text style={styles.allColorText}><FontAwesome
                        name={'google-wallet'}
                        size={22}
                    />
                        &nbsp;&nbsp;游戏中心</Text>
                    <FontAwesome
                        name={'angle-double-right'}
                        size={22}
                        color={'#b2b2b2'}
                        style={{marginRight:10}}
                    />
                </TouchableOpacity>
                <View style={{width:screenWidth,height:4,backgroundColor: "#141414"}}></View>
                <TouchableOpacity style={styles.funcStyle}>
                    <Text style={styles.allColorText}><FontAwesome
                        name={'meetup'}
                        size={21}
                    />
                        &nbsp;&nbsp;服务中心</Text>
                    <FontAwesome
                        name={'angle-double-right'}
                        size={22}
                        color={'#b2b2b2'}
                        style={{marginRight:10}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.funcStyle}>
                    <Text style={styles.allColorText}><FontAwesome
                        name={'slideshare'}
                        size={22}
                    />
                        &nbsp;&nbsp;设置</Text>
                    <FontAwesome
                        name={'angle-double-right'}
                        size={22}
                        color={'#b2b2b2'}
                        style={{marginRight:10}}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    allColorText:{
        color:'#b2b2b2',
        fontSize:20
    },
    allFunStyle:{
        width:screenWidth*0.94,
        height:400,
        marginLeft:11,
    },
    funcStyle:{
        width: screenWidth*0.94,
        height: screenHeight*0.07,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:screenHeight*0.07*0.20,
    }
});

export default MineFunction;
