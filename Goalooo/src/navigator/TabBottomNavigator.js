import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from '../navigator/HomeNavigator';
import DiscoveryNavigator from '../navigator/DiscoveryNavigator';
import NotificationNavigator from '../navigator/NotificationNavigator';
import MineNavigator from '../navigator/MineNavigator';
import {Dimensions, Image, StyleSheet} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

function TabBottom() {
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        if (route.name === 'Home') {
                            return(
                                 focused ?
                                     <Image source={require("../repository/icon/bar_medal.png")} style={styles.activeBar}/>
                                     :
                                     <Image source={require("../repository/icon/bar_home.png")} style={styles.inactiveBar}/>
                            );

                        } else if (route.name === 'Discovery') {
                            return(
                                focused ?
                                    <Image source={require("../repository/icon/bar_flag.png")} style={styles.activeBar}/>
                                    :
                                    <Image source={require("../repository/icon/bar_search.png")} style={styles.inactiveBar}/>
                            );
                        } else if (route.name === 'Notification') {
                            return(
                                focused ?
                                    <Image source={require("../repository/icon/bar_scorecard.png")} style={styles.activeBar}/>
                                    :
                                    <Image source={require("../repository/icon/bar_message.png")} style={styles.inactiveBar}/>
                            );
                        } else if (route.name === 'Mine') {
                            return(
                                focused ?
                                    <Image source={require("../repository/icon/bar_time.png")} style={styles.activeBar}/>
                                    :
                                    <Image source={require("../repository/icon/bar_mine.png")} style={styles.inactiveBar}/>
                            );
                        }

                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#2d62b2',
                    inactiveTintColor: 'grey',
                    showLabel:true,
                    showIcon:true,
                    labelPosition:'below-icon',
                    style:{
                        height:screenHeight*0.11,
                        backgroundColor:'#000'
                    },
                    labelStyle:{
                        color:'#fff'
                    }
                }}
            >
                <Tab.Screen name="Home" component={HomeNavigator} />
                <Tab.Screen name="Discovery" component={DiscoveryNavigator} />
                <Tab.Screen name="Notification" component={NotificationNavigator} />
                <Tab.Screen name="Mine" component={MineNavigator} />
            </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    activeBar:{
        width:screenWidth*0.11,
        height:screenWidth*0.11,
    },
    inactiveBar:{
        width:screenWidth*0.06,
        height:screenWidth*0.06,
    },
});


export default function TabBottomNavigator(){
    return (
        <TabBottom/>
    );
}
