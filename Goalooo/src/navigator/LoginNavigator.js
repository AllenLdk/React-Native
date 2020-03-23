import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/loginScreen';
import RegistScreen from '../screens/registScreen';
import BasicInfo from '../screens/registScreen/basicInfo';
import TabBottomNavigator from '../navigator/TabBottomNavigator';

const Stack = createStackNavigator();

function Login() {
    return (
            <Stack.Navigator
                initialRouteName={'Login'}
                screenOptions={{
                    headerStyle:{
                        backgroundColor:'#000'
                    },
                    headerTintColor:'#fff'
                }}
            >
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown:false
                    }}
                />
                <Stack.Screen
                    name="Regist"
                    component={RegistScreen}
                    options={{
                        title:'用户注册'
                    }}
                />
                <Stack.Screen
                    name="BasicInfo"
                    component={BasicInfo}
                    options={{
                        title:'接下来让我们填写一些基本信息'
                    }}
                />
                <Stack.Screen
                name="TabBottomNavigator"
                component={TabBottomNavigator}
                options={{
                    headerShown:false
                }}
            />
            </Stack.Navigator>
    );
}


export default function LoginNavigator() {
    return (
        <Login />
    );
}
