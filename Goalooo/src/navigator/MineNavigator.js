import * as React from 'react';
import {Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MineScreen from '../screens/mineScreen';
import EditUser from '../screens/mineScreen/components/editUser';


const Stack = createStackNavigator();

function Mine() {
    return (
        <Stack.Navigator
            initialRouteName={'Mine'}
            screenOptions={{
                headerStyle:{
                    backgroundColor:'#000'
                },
                headerTintColor:'#fff'
            }}>
            <Stack.Screen
                name="Mine"
                component={MineScreen}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name="EditUser"
                component={EditUser}
                headerRight={'保存'}
                options={{
                    title: '编辑资料'
                }}
            />
        </Stack.Navigator>
    );
}


export default function MineNavigator() {
    return (
        <Mine />
    );
}
