import React from 'react';
import { Text, View ,Image} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Ionicons from 'react-native-vector-icons';

// 下面是 4个组件
class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

class Xinjia extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>新加坡</Text>
            </View>
        );
    }
}

class Malai extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>马来西亚</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator(
    {
        Home:{
            screen: HomeScreen,
            navigationOptions:({navigation})=>({
                tabBarLabel:"中国",
                // tabBarIcon:({focused,horizontal,tintColor})=>{
                //     let image = focused ? require('./xiong.jpg') : require('./mao.jpg');
                //     return <Image style={{height:40, width:40}} source={image} />
                // }
            })

        },
        Setting:{
            screen: SettingsScreen,
            navigationOptions:{
                tabBarLabel:"日本",
                // 配置Icon图标有两种方式，（1）使用图片，我觉得简单（2）使用图标库
                // tabBarIcon:({focused,horizontal,tintColor})=>{
                //     let image = focused ? require('./xiong.jpg') : require('./mao.jpg');
                //     return <Image style={{height:40, width:40}} source={image} />
                // }
            }
        },
        Xin:{
            screen: Xinjia,
            navigationOptions:{
                tabBarLabel:"新加",
                //  tabBarVisible: false 隐藏标签栏，就是隐藏tabBar
            }
        },
        Malai:{
            screen: Malai,
            navigationOptions:{
                tabBarLabel:"马来"
            }
        }
    },
    {
        tabBarOptions: {
            showIcon: true,            // 是否显示选项卡的图标
            activeTintColor: 'tomato', // 选中时状态颜色
            inactiveTintColor: 'gray', // 未选中状态颜色
            labelStyle: {              // 选项卡标签的样式对象
                fontSize: 12,
            },
            style: {                   // 选项卡栏的样式对象
                backgroundColor: 'blue',
            },
        }
    }
);

const Test =  createAppContainer(TabNavigator);

export default class Hello extends React.Component{
    render() {
        return (
            <View style={{backgroundColor:'#fff'}}>
                <Test/>
            </View>
        );
    }
}
