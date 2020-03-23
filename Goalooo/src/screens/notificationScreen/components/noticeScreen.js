import React , { Component }from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {ListRow} from 'teaset';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export default class NoticeScreen extends Component {
    render() {
        return (
            <View  style={styles.container}>
                <ListRow
                    icon={<Image style={{width:40,height:40,marginRight:15,marginLeft:3,borderRadius:25}} source={require('../../../repository/images/mine/profile.png')} />}
                    style={{backgroundColor: '#000',paddingBottom:10,paddingTop:10,borderBottomWidth:0.5,borderColor:'#b2b2b2',borderStyle:'dashed'}}
                    titleStyle={{color:'#fff'}}
                    detailStyle={{color:'#fff'}}
                    title='系统消息'
                    titlePlace='top'
                    detail={
                        '您发布的主题帖由于违反了我们的《Goalooo社区协议》被系统或管理员删帖，您可以在我的>服务中心>删帖回收站查看原因和申请恢复，更多详情可咨询社区管理员。'
                    }
                    swipeActions={[
                        <ListRow.SwipeActionButton title='移除' style={{backgroundColor:'#000'}} onPress={() => alert('已移除')}/>,
                    ]}/>
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
    },
    Text:{
        color:'#565656',
        fontSize:30
    }});
