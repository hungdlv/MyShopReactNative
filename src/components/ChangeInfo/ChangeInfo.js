import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ChangeInfo extends Component {

    constructor() {
        super();
    }

    gotoMain() {
        const navigator = this.props.navigator;
        navigator.pop();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'green' }}>
                <Text>ChangeInfo</Text>
                <TouchableOpacity onPress={this.gotoMain.bind(this)}>
                    <Text>Go back Main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
