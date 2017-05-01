import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/components/App';

export default class MyShop2 extends Component {
  render() {
    return <App />
  }
}

AppRegistry.registerComponent('MyShop2', () => MyShop2);
