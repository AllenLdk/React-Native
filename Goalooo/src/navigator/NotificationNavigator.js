import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationScreen from '../screens/notificationScreen';


const Stack = createStackNavigator();

function Notification() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                    headerShown:false
                }}
            />
        </Stack.Navigator>
    );
}


export default function NotificationNavigator() {
    return (
        <Notification />
    )
}
