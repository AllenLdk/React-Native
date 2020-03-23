import React , { Component }from 'react';
import {View, Text, StyleSheet, Dimensions, Image,TouchableOpacity} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ClubTitle from './clubTitle';
import NoticeBar from './noticeBar';
import {actionCreators} from '../store';
import {connect} from 'react-redux';

class DrawerScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ClubTitle/>
                <NoticeBar/>
                <View style={styles.segmentationSty}></View>
                <TouchableOpacity style={styles.labelSty}>
                    <Text style={styles.titlesSty}>
                        <Image source={require('../../../repository/icon/mall.png')} style={styles.imgSty}/>
                        &emsp;商城
                    </Text>
                    <FontAwesome
                        name={'angle-right'}
                        size={18}
                        color={'#b2b2b2'}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.labelSty}>
                    <Text style={styles.titlesSty}>
                        <Image source={require('../../../repository/icon/scan.png')} style={styles.imgSty}/>
                        &emsp;扫一扫
                    </Text>
                    <FontAwesome
                        name={'angle-right'}
                        size={18}
                        color={'#b2b2b2'}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.labelSty}>
                    <Text style={styles.titlesSty}>
                        <Image source={require('../../../repository/icon/feedback.png')} style={styles.imgSty}/>
                        &emsp;反馈
                    </Text>
                    <FontAwesome
                        name={'angle-right'}
                        size={18}
                        color={'#b2b2b2'}
                    />
                </TouchableOpacity>
                <View style={styles.AdministartorSty}>
                    <Text style={{color:"#6f1c06"}}>管理员权限</Text>
                </View>
                <TouchableOpacity style={styles.labelSty}>
                    <Text style={styles.titlesSty}>
                        <Image source={require('../../../repository/icon/delete.png')} style={styles.imgSty}/>
                        &emsp;我的删帖
                    </Text>
                    <FontAwesome
                        name={'angle-right'}
                        size={18}
                        color={'#b2b2b2'}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.labelSty}>
                    <Text style={styles.titlesSty}>
                        <Image source={require('../../../repository/icon/dark_house.png')} style={styles.imgSty}/>
                        &emsp;小黑屋
                    </Text>
                    <FontAwesome
                        name={'angle-right'}
                        size={18}
                        color={'#b2b2b2'}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}





const styles = StyleSheet.create({
    container:{
        width:screenWidth*0.7,
        height:screenHeight,
        backgroundColor:'#000',
        borderWidth:0.2,
        borderColor:'#373a3b'
    },
    AdministartorSty:{
        width:screenWidth*0.7*0.99,
        backgroundColor:'#121313',
        padding:5
    },
    imgSty:{
        width:screenWidth*0.05,
        height:screenWidth*0.05,
    },
    labelSty:{
        width:screenWidth*0.7*0.99,
        height:screenHeight*0.08,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15,
        borderWidth:1,
        borderBottomColor:'#121313',
        alignItems:'center',
    },
    titlesSty:{
        color:'#fff',
        fontSize:18
    },
    segmentationSty:{
        width: screenWidth*0.7*0.99,
        height: 1,
        borderWidth:5,
        borderColor: '#121313'
    },
});

const mapState = (state) => ({
    login:state.getIn(['login','userId']),
});

const mapDispath = (dispatch) => {
    return {

    }
};

export default connect(mapState,mapDispath)(DrawerScreen);
