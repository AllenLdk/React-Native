import React , { Component }from 'react';
import {View, Image, StyleSheet,Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

import { ListRow } from 'teaset';

export default class MessageScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ListRow
                    icon={<Image style={{width:40,height:40,marginRight:15,marginLeft:3,borderRadius:25}} source={require('../../../repository/images/mine/profile.png')} />}
                    style={{backgroundColor: '#000',paddingBottom:10,paddingTop:10,borderBottomWidth:0.5,borderColor:'#b2b2b2',borderStyle:'dashed'}}
                    titleStyle={{color:'#fff'}}
                    detailStyle={{color:'#fff'}}
                    title='陌生人发来的消息'
                    titlePlace='top'
                    detail={
                    '老哥，在吗，想找你说个事儿~'
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
