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
import firebaseDatabase from '../FirebaseDatabase'
import firebaseAuth from '../FirebaseAuth'

import Toolbar from './Toolbar'

export default class Dashboard extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Toolbar/>

                <ActivityIndicator
                    style={styles.activityIndicator}
                    color='#bc2b78'
                    size="large"/>
            </View>
        );

    }
}
AppRegistry.registerComponent('Dashboard', () => Dashboard);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFC300',
        flex: 1,
        flexDirection: 'column'
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
});
