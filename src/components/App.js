import React, { Component } from 'react';
import { View, Text, StatusBar, Navigator } from 'react-native';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';


StatusBar.setHidden(true);
export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Navigator 
                initialRoute={{ name: 'MAIN' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'MAIN': return <Main navigator={navigator} />;
                        case 'AUTHENTICATION': return <Authentication navigator={navigator} />;
                        case 'CHANGE_INFO': return <ChangeInfo navigator={navigator} />;
                        default: return <OrderHistory navigator={navigator} />;
                    }
                }}

                configureScene={route => {
                        if (route.name === 'AUTHENTICATION') { return Navigator.SceneConfigs.FloatFromRight; }
                        return Navigator.SceneConfigs.FloatFromLeft;
                }}
            />
        );
    }
}
