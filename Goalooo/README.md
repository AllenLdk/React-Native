**项目说明**

一、组件库
"@react-native-community/masked-view": "^0.1.6",
"@react-native-community/viewpager": "^3.1.0",
"@react-navigation/bottom-tabs": "^5.0.3",
"@react-navigation/native": "^5.0.3",
"@react-navigation/stack": "^5.0.3",
"axios": "^0.19.0",
"immutable": "^4.0.0-rc.12",
"prop-types": "^15.7.2",
"react": "16.9.0",
"react-native": "0.61.4",
"react-native-gesture-handler": "^1.5.2",
"react-native-global-props": "^1.1.5",
"react-native-image-zoom-viewer": "^2.2.27",
"react-native-reanimated": "^1.7.0",
"react-native-safe-area-context": "^0.7.3",
"react-native-screens": "^2.0.0-beta.2",
"react-native-scrollable-tab-view": "^1.0.0",
"react-native-splash-screen": "^3.2.0",
"react-native-vector-icons": "^6.6.0",
"react-redux": "^7.1.3",
"redux": "^4.0.4",
"redux-immutable": "^4.0.0",
"redux-thunk": "^2.3.0",
"teaset": "^0.7.1"

未实现的功能集合：
上传头像

二、数据传输说明
1.登录
提交用户名、密码（后期见进度可扩建），后台接收后与数据库对比用户名、密码，返回json对象，详情见login.json，
设置登录状态loginState以控制用户是否进入主页面，并修改state中的当前用户ID。
2.注册
提交用户名、密码（后期见进度可扩建），后台接收后与数据库对比用户名是否存在，如果存在则返回false，提示用户已
存在，如果不存在则返回true，前台接收后改变注册状态进入信息填写组件。
