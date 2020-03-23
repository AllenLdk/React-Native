import React ,{ Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    SectionList,
    KeyboardAvoidingView,
} from 'react-native';
import {connect} from 'react-redux';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import ImagePicker from 'react-native-image-crop-picker';
import { actionCreators } from '../store';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {PullPicker} from 'teaset';
import DatePicker from './datePicker';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname:this.props.nickname,
            sex:this.props.sex,
            birthday:this.props.birthday,
            introduce:this.props.introduce
        };
    };

    _setBirthday(birthday) {
        this.setState({
            birthday:birthday
        });
    }
    //初始化一个对象，path本地路径
    _imageObj = {
        path: '/Users/kk/XueXireactNativeDeDaiMa/SampleAppMovies/image/d11.png',
        imageUrl: require('../../../repository/images/home/barca.jpg')
    };
    openPictureManager =()=>{
        ImagePicker.openPicker({
            width: screenHeight*0.15,
            height: screenHeight*0.15,
            cropping: true
        }).then(image => {
            // let formData = new FormData();//如果需要上传多张图片,需要遍历数组,把图片的路径数组放入formData中
            // let file = {uri: image.path, type: 'multipart/form-data', name: 'image.png'};   //这里的key(uri和type和name)不能改变,
            // formData.append('file',file);
            // this.props.uploadProfile(formData);
            this.setState({
                imageUrl: {uri: image['path']}
            });
            this._imageObj = image;
            let params = {
                path:  this._imageObj['path'],    //本地文件地址
            };
            this.props.uploadProfile(params);
        });
    };
    render(){
        const items_sex = ['先生','女士'];
        const {username,club,profile_path,vip,selectedIndex} = this.props;
        this.props.navigation.setOptions({
            headerRight: () => (
                <TouchableHighlight
                    style={{marginRight:screenWidth*0.05}}
                    onPress={() =>{
                        this.props.modifiedUserData(username,this.state.nickname,this.state.sex,this.state.birthday,this.state.introduce);
                        this.props.navigation.goBack();
                    }}
                >
                    <Text style={{color:'#fff',fontSize:18}}>保 存</Text>
                </TouchableHighlight>
            ),
        });
        return(
            <KeyboardAvoidingView behavior="padding"
                style={styles.container} >
                <View style={{marginTop: -screenHeight*0.1}}>
                <View style={styles.profileSty}>
                    <TouchableHighlight style={styles.profile} onPress={() =>this.openPictureManager()}>
                        <Image style={styles.profileImg} source={{uri:profile_path}}/>
                    </TouchableHighlight>
                </View>
                <View style={styles.lineStyle}>
                    <Text style={styles.textSty}>
                        用户名:&emsp;
                        <Text style={styles.textSty}>{username}</Text>
                    </Text>
                </View>
                <View style={styles.lineStyle}>
                    <View style={styles.everyLine}>
                        <Text style={styles.textSty}>昵&emsp;称:&emsp;</Text>
                        <TextInput
                            style={{ height: screenHeight*0.07,  borderWidth: 1,color:'#fff',fontSize: 18 }}
                            onChangeText={text => this.setState({nickname:text})}
                            value={this.state.nickname}
                            maxLength={15}
                        />
                    </View>
                    <FontAwesome
                    name={'pencil'}
                    size={18}
                    color={'#b2b2b2'}
                    style={{marginRight: 0}}
                    />
                </View>
                <TouchableOpacity
                    style={styles.lineStyle}
                    onPress={()=>PullPicker.show(
                    '选择你的性别',
                    items_sex,
                    selectedIndex,
                    (item) => this.setState({sex:item})
                )}>
                    <View style={styles.everyLine}>
                        <Text style={styles.textSty}>性&emsp;别:&emsp;</Text>
                        <Text style={styles.textSty}>{this.state.sex}</Text>
                    </View>
                    <FontAwesome
                        name={'child'}
                        size={20}
                        color={'#b2b2b2'}
                        style={{marginRight: 0}}
                    />
                </TouchableOpacity>
                <View style={styles.lineStyle}>
                    <View style={styles.everyLine}>
                        <Text style={styles.textSty}>简&emsp;介:&emsp;</Text>
                        <TextInput
                            style={{ height: screenHeight*0.07,borderWidth: 1,color:'#fff',fontSize: 18 }}
                            onChangeText={text => this.setState({introduce:text})}
                            value={this.state.introduce}
                            maxLength={15}
                        />
                    </View>
                    <FontAwesome
                        name={'hand-peace-o'}
                        size={18}
                        color={'#b2b2b2'}
                        style={{marginRight: 0}}
                    />
                </View>
                <TouchableOpacity style={styles.lineStyle}>
                    <View style={styles.everyLine}>
                        <Text style={styles.textSty}>生&emsp;日:&emsp;</Text>
                        <DatePicker birthday={this.state.birthday}  _setBirthday = {this._setBirthday.bind(this)}/>
                    </View>
                    <FontAwesome
                        name={'calendar-check-o'}
                        size={18}
                        color={'#b2b2b2'}
                        style={{marginRight: 0}}
                    />
                </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        width:screenWidth,
        height:screenHeight,
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    textSty:{
        color:'#fff',
        fontSize:18
    },
    everyLine:{
        flexDirection: 'row',
        alignItems:'center',
    },
    lineStyle:{
        width:screenWidth*0.6,
        height:screenHeight*0.05,
        marginTop:screenHeight*0.02,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    profileSty:{
        marginBottom:screenHeight*0.05,
        alignItems:'center'
    },
    profile:{
        width:screenHeight*0.15,
        height:screenHeight*0.15,
        borderWidth: 2,
        borderColor:'#b2b2b2',
        borderRadius:50,
        overflow:'hidden',
    },
    profileImg:{
        width:screenHeight*0.15,
        height:screenHeight*0.15,
    },
});

const mapState = (state) => ({
    username:state.getIn(['login','username']),
    club:state.getIn(['mine','club']),
    nickname:state.getIn(['mine','nickname']),
    sex:state.getIn(['mine','sex']),
    profile_path:state.getIn(['mine','profile_path']),
    vip:state.getIn(['mine','vip']),
    birthday:state.getIn(['mine','birthday']),
    introduce:state.getIn(['mine','introduce']),
});

const mapDispatch = (dispatch) => ({
    modifiedUserData(username,nickname,sex,birthday,introduce){
        dispatch(actionCreators.modifiedUserData(username,nickname,sex,birthday,introduce));
    },
    uploadProfile(params){
        dispatch(actionCreators.uploadProfile(params));
    },
});

export default connect(mapState,mapDispatch)(EditUser);
