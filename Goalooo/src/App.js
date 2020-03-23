/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React ,{Component} from 'react';
import { Dimensions, StyleSheet, View,} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import SplashScreen from 'react-native-splash-screen';
//导入创建的导航
import { connect } from 'react-redux';

import LoginNavigator from './navigator/LoginNavigator';
import TabBottomNavigator from './navigator/TabBottomNavigator';
import {NavigationContainer} from '@react-navigation/native';



class App extends Component {
  componentDidMount() {
    setInterval(() =>{
      SplashScreen.hide();
    },3000);
  }

  render() {
    const {loginState,userId} = this.props;
    return (
        <View style={styles.container }>
          <NavigationContainer>
          {/*监听loginState的状态判断是否登录，loginState状态为默认为false，通过登录改变其状态为true进入到TabBarNavigator组件*/}
          {loginState?<TabBottomNavigator/>:<LoginNavigator/>}
          </NavigationContainer>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    width:screenWidth,
    height:screenHeight,
    backgroundColor:'#000'
  },
});

const mapState = (state) => ({
    loginState:state.getIn(['login','loginState']),
});

const mapDispath = (dispatch) => {
  return {

  }
};

export default connect(mapState,mapDispath)(App);

