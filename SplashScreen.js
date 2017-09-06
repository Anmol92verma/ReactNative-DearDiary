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

export default class SplashScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={{
                    uri: 'https://www.logo-designer.co/wp-content/uploads/2014/10/Culture-Diary-logo-design-branding-Praline.jpg'
                }}/>

                <ActivityIndicator
                    style={styles.activityIndicator}
                    color='#bc2b78'
                    size="small"/>
            </View>
        );
    }
}
AppRegistry.registerComponent('SplashScreen', () => SplashScreen);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#FFC300'
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
});
