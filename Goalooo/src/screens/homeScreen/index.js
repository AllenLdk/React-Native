import React , { Component } from 'react';
import {View,StyleSheet,Dimensions,Button} from 'react-native';
import Invitation from './components/invitation';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Invitation navigate={this.props.navigation.navigate}/>
            </View>
        );
    }
}





const styles = StyleSheet.create({

});



