import React , { Component }from 'react';
import { StyleSheet, Dimensions, DrawerLayoutAndroid, Text, Button} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

import OnePost from './onePost';

export default class List extends Component {
    render() {
        return (
            <OnePost navigate={this.props.navigate}/>
        );
    }
}



const styles = StyleSheet.create({

});
