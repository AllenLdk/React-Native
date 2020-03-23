/**
 * @format
 */
import React , { Component } from 'react';
import { createStore } from 'redux';
import reducer from './src/store/reducer';
import { Provider } from 'react-redux';
export default createStore(reducer)     // 导入state
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import store from './src/store';

import App from './src/App';

class Apps extends Component {
    render() {
        return (
            // 挂载store,让app内部所有组件都可以使用
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent(appName, () => Apps);
