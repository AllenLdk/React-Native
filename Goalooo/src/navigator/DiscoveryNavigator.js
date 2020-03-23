import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DiscoveryScreen from '../screens/discoveryScreen';


const Stack = createStackNavigator();

function Discovery() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Discovery"
                component={DiscoveryScreen}
                options={{
                    headerShown:false
                }}
            />
        </Stack.Navigator>
    );
}


export default function DiscoveryNavigator() {
    return (
        <Discovery />
    );
}
