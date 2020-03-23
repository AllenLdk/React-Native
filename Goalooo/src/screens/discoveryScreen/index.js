import React , { Component }from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

import { SearchInput } from 'teaset';



export default class DiscoveryScreen extends Component {
    state = { valueCustom: '热搜： 沙坪坝跳楼男人砸死两名路人' };
        render() {
        return (
            <View style={styles.container}>
                <SearchInput
                    style={{width: screenWidth*0.9,borderRadius:20,marginLeft:screenWidth*0.05, height: 40, backgroundColor: '#292929',borderColor:"#000"}}
                    inputStyle={{color: '#fff', fontSize: 18}}
                    iconSize={15}
                    placeholder={this.state.valueCustom}
                    placeholderTextColor='#b2b2b2'
                    onChangeText={text => this.setState({valueCustom: text})}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000000',
        width:screenWidth,
        height:screenHeight,
        paddingTop:10
    },
    Text:{
        color:'#565656',
        fontSize:30
    }});
