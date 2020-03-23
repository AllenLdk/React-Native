import React , { Component }from 'react';
import { StyleSheet,Button,RefreshControl,FlatList, View, Text, Dimensions, Image,TouchableOpacity } from 'react-native';
import {actionCreators} from '../store';
import {connect} from 'react-redux';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


class OnePost extends Component {
    componentDidMount() {  //初始化的时候要判断长度 控制上拉加载
        const ListNums = this.fullScreenJusting(250);
        this.props.getListNums(ListNums);
        this.props.onEndReachedCalled = false;
        this.props.loadPost(ListNums, 1, true);
    }
    //满屏页面判断
    fullScreenJusting(ItemHeight) {
        //计算列表个数
        const listNum = (screenHeight - 40) / ItemHeight;
        return Math.ceil(listNum);
    }

    renderItem = (item) => {
        return (
                <TouchableOpacity onPress={()=>{this.props.navigate('Invitation')}}>
                    <View style={styles.container}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={styles.profile}>
                                <Image style={styles.profileImg} source={{uri: 'http://www.allenweb.cn:8080/GoaloooImg/profile/defaultProfile.jpg'}}/>
                            </View>
                            <View>
                                <Text style={styles.textColor}>{item.username}</Text>
                                <Text style={styles.timeColor}>{item.time}</Text>
                            </View>
                        </View>
                        <View style={{marginTop:10}}>
                            <Text style={styles.title_Sty}>{item.title}</Text>
                            <Image source={require('../../../repository/images/home/barca.jpg')} style={{width:screenWidth*0.2,height:screenWidth*0.2}}/>
                        </View>
                    </View>
                    <View style={styles.lineSty}></View>
                </TouchableOpacity>
        );
    };
    //尾部
    _ListFooterComponent = () => {
        return (
            <View style={{width:screenWidth,alignItems:'center',}}>
                <Text style={styles.lastTxt}>------ 好厉害！(´▽｀)你竟然全看完了------</Text>
            </View>
        );
    };
    //为空时
    _ListEmptyComponent=() => {
        return (
            <View style={styles.listEmptyComponentSty}>
                <Text style={styles.lastTxt}>还没有人发帖哦，赶紧来成为第一个吧！</Text>
            </View>
        );
    };

    _keyExtractor = (item) => item.id;

    _onEndReached = () => {
        if (!this.props.nomore && this.props.onEndReachedCalled ) {
            this.loadPost(this.props.pageSize, ++this.props.pageNumber, false);
        }
        this.props.onEndReachedCalled=true;

    };

    _onRefresh() {
        this.props.refreshPost();
    }

    render() {
        return (
            <FlatList
                refreshing={true}
                refreshControl={
                <RefreshControl
                refreshing={this.props.refreshing}
                colors={['#ff0000', '#00ff00', '#0000ff']}
                progressBackgroundColor={"#ffffff"}
                onRefresh={() => {
                this._onRefresh();
                }}
                />
                }
                keyExtractor = {this._keyExtractor}
                data={this.props.post}
                onEndReached={this._onEndReached}
                onRefresh={this._onRefresh}
                ListEmptyComponent={this._ListEmptyComponent}
                ListFooterComponent={this._ListFooterComponent}
                renderItem={({ item }) => this.renderItem(item)}
            />
        );
    }
}



const styles = StyleSheet.create({
    container:{
        width:screenWidth,
        padding:15,
    },
    lastTxt:{
        color:'#b2b2b2',
        fontSize:16
    },
    listEmptyComponentSty:{
        width:screenWidth,
        height:screenHeight*0.75,
        justifyContent:'center',
        alignItems:'center'
    },
    lineSty:{
        borderColor:'#212121',
        borderWidth:1,
        width: screenWidth*0.95,
        marginLeft:(screenWidth-screenWidth*0.95)/2,
        marginTop:screenHeight*0.01
    },
    textColor:{
        color:'#b2b2b2',
        fontSize:22
    },
    timeColor:{
        color:'#b2b2b2',
        fontSize:14
    },
    title_Sty:{
        color:'#b2b2b2',
        fontSize:20,
        marginBottom:15
    },
    profile:{
        width:screenHeight*0.07,
        height:screenHeight*0.07,
        borderRadius:50,
        overflow:'hidden',
        marginRight:10,

    },
    profileImg:{
        width:screenHeight*0.07,
        height:screenHeight*0.07,
    },
});

const mapState = (state) => ({
    post:state.getIn(['home','post']),
    pageSize:state.getIn(['home','pageSize']),
    nomore:state.getIn(['home','nomore']),
    refreshing:state.getIn(['home','refreshing']),
    userId:state.getIn(['login','userId']),
});

const mapDispath = (dispatch) => {
    return {
        loadPost(ListNums, pageNumber, fresh){
            dispatch(actionCreators.loadPost(ListNums, pageNumber, fresh));
        },
        refreshPost(){
            dispatch(actionCreators.refreshPost());
        },
        getListNums(ListNums){
            dispatch(actionCreators.getListNums(ListNums));
        }
    }
};

export default connect(mapState,mapDispath)(OnePost);
