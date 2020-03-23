import React , { Component }from 'react';
import {View, Text, StyleSheet, Dimensions, DrawerLayoutAndroid, Button} from 'react-native';
import {SegmentedView} from 'teaset';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import List from './list';
import DrawerScreen from './drawerScreen';

export default class Invitation extends Component {
    render() {
        const navigationView = (
            <DrawerScreen/>
        );
        return (
            <View style={styles.container}>
                <DrawerLayoutAndroid

                    drawerWidth={screenWidth*0.7}
                    drawerPosition={'left'}
                    renderNavigationView={() => navigationView}>
                    <SegmentedView
                        style={{flex: 1,width:screenWidth}}
                        type='projector'
                        indicatorLineColor={'#304664'}
                        indicatorLineWidth={screenWidth*0.01}
                        barStyle={{backgroundColor: '#1f1f1f',width:screenWidth*0.6}}
                    >
                        <SegmentedView.Sheet
                            title='最新'
                            titleStyle={{fontSize: 17}}
                            activeTitleStyle={styles.AtiveText}>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',paddingBottom:screenHeight*0.11}}>
                                <List navigate={this.props.navigate}/>
                            </View>
                        </SegmentedView.Sheet>
                        <SegmentedView.Sheet
                            title='热门'
                            titleStyle={{fontSize: 17}}
                            activeTitleStyle={styles.AtiveText}>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                            </View>
                        </SegmentedView.Sheet>
                        <SegmentedView.Sheet
                            title='精华'
                            titleStyle={{fontSize: 17}}
                            activeTitleStyle={styles.AtiveText}>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                            </View>
                        </SegmentedView.Sheet>
                    </SegmentedView>
                </DrawerLayoutAndroid>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        // marginTop:screenHeight*0.03,
        borderRadius:10,
        backgroundColor:'#1f1f1f',
        width:screenWidth,
        height:screenHeight,
    },
    AtiveText:{
        fontSize:17,
        color:'#fff'
    },
});
