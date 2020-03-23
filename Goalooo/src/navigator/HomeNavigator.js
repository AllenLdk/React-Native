import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import InvitationScreen from '../screens/invitationScreen';


const Stack = createStackNavigator();

function Home() {
    return (
        <Stack.Navigator
            initialRouteName={'Home'}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown:false
                }}
                />
            <Stack.Screen
                name="Invitation"
                component={InvitationScreen}
                options={{

                }}
            />
        </Stack.Navigator>
    );
}


export default function HomeNavigator() {
    return (
        <Home />
    );
}
