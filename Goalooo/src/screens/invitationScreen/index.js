import React , { Component }from 'react';
import {View, Text, StyleSheet,Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class InvitationScreen extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{color:'#fff'}}>invitation SSSSScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#000000',
        width:screenWidth,
        height:screenHeight,
    },
});
