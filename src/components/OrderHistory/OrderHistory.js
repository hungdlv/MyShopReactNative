import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class OrderHistory extends Component {

    constructor() {
        super();
    }

    gotoMain() {
        const navigator = this.props.navigator;
        navigator.pop();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <Text>OrderHistory</Text>
                <TouchableOpacity onPress={this.gotoMain.bind(this)}>
                    <Text>Go back Main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
