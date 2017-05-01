import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Main extends Component {

    constructor() {        
        super();
    }

    gotoAuthentication() {
        const navigator = this.props.navigator;
        navigator.push({ name: 'AUTHENTICATION' });
    }

    gotoChangeInfo() {
        const navigator = this.props.navigator;
        navigator.push({ name: 'CHANGE_INFO' });
    }

    gotoOrderHistory() {
        const navigator = this.props.navigator;
        navigator.push({ name: 'ORDER_HISTORY' });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow' }} onPress={this.onPress}>
                <Text>Main</Text>
                <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoChangeInfo.bind(this)}>
                    <Text>Go to ChangeInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoOrderHistory.bind(this)}>
                    <Text>Go to OrderHistory</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
