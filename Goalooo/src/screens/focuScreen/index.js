import React , { Component }from 'react';
import {View, Text, StyleSheet,Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class FocuScreen extends Component {
    static navigationOptions = {
        headerTitle: () => <Text>123</Text>
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.Text}>Focu Screen</Text>
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
    Text:{
        color:'#565656',
        fontSize:30
    }});
