/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator
} from 'react-native';

export default class Dashboard extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    style={styles.activityIndicator}
                    color='#bc2b78'
                    size="small"/>
            </View>
        );

    }
}
AppRegistry.registerComponent('Dashboard', () => Dashboard);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#FFC300'
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
});
