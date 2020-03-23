import React , { Component }from 'react';
import {View, StyleSheet,Dimensions,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import UserMessage from './components/userMessage';
import MineFunction from './components/mineFunction';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


class MineScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <UserMessage navigate={this.props.navigation.navigate} style={styles.userMessageStyle} />
                    <MineFunction navigate={this.props.navigation.navigate} style={styles.mineFunctionStyle} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#000000',
        width:screenWidth,
        height:screenHeight,
    },
    navigationBarStyle:{
        backgroundColor: '#000',
        width: screenWidth,
        height: 30,
    },
    userMessageStyle:{

    },
    mineFunctionStyle:{

    }
});


const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState,mapDispatch)(MineScreen);
