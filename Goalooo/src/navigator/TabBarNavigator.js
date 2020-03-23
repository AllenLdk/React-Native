import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

import ScrollableTabView, { DefaultTabBar,ScrollableTabBar}from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome';

import TabbarComponent from '../component/TabbarComponent';
import HomeNavigator from './HomeNavigator';
import DiscoveryNavigator from './DiscoveryNavigator';
import NotificationNavigator from './NotificationNavigator';
import MineNavigator from './MineNavigator';

export default class TabBarNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabNames: ['探索', '发现', '通知', '我的'],
            tabIconNames: ['md-globe', 'md-planet', 'md-chatboxes', 'logo-octocat'],

        }
    }
    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        return (
            <ScrollableTabView
                style = {styles.container}
                renderTabBar={() => <TabbarComponent tabNames={tabNames} tabIconNames={tabIconNames}/>}
                tabBarPosition={'bottom'}
                locked={true}
                initialPage={0}
                prerenderingSiblingsNumber={1}
            >
                <View tabLabel="page1">
                    <HomeNavigator/>
                </View>
                <View tabLabel="page2">
                    <DiscoveryNavigator/>
                </View>
                <View tabLabel="page3">
                    <NotificationNavigator/>
                </View>
                <View tabLabel="page4" style={styles.center}>
                    <MineNavigator/>
                </View>
            </ScrollableTabView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#000',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

});












