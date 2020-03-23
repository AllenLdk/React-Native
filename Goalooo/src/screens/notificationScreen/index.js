import React , { Component }from 'react';
import {View,Text, StyleSheet,Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


import TalkScreen from './components/talkScreen';
import NoticeScreen from './components/noticeScreen';
import MessageScreen from './components/messageScreen';

import { SegmentedView } from 'teaset';



export default class NotificationScreen extends Component {
    render() {
            return (
                <View style={styles.container}>
                    <SegmentedView
                        style={{flex: 1}}
                        type='projector'
                        indicatorLineColor={'#b2b2b2'}
                        barStyle={{backgroundColor: '#000',width:screenWidth*0.6,marginLeft:screenWidth*0.2}}
                    >
                        <SegmentedView.Sheet
                            title='交流'
                            titleStyle={{fontSize: 17}}
                            activeTitleStyle={styles.AtiveText}>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <TalkScreen/>
                            </View>
                        </SegmentedView.Sheet>
                        <SegmentedView.Sheet
                            title='消息'
                            badge={1}
                            titleStyle={{fontSize: 17}}
                            activeTitleStyle={styles.AtiveText}>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <MessageScreen/>
                            </View>
                        </SegmentedView.Sheet>
                        <SegmentedView.Sheet
                            title='通知'
                            titleStyle={{fontSize: 17}}
                            activeTitleStyle={styles.AtiveText}>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <NoticeScreen/>
                            </View>
                        </SegmentedView.Sheet>
                    </SegmentedView>
                </View>
            );
        }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000000',
        width:screenWidth,
        height:screenHeight,
        paddingTop:10,
    },
    AtiveText:{
        fontSize:17,
        color:'#fff'
    },
    barSty:{
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'green'
    }
});




