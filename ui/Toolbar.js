import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Button,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Toolbar extends Component {

    render() {
        return (
            <View style={styles.toolbarStyle}>
                <Icon style={styles.backStyle} name="arrow-back" size={30} color="#FFFFFF"/>
                <Text style={styles.toolbarTitle}>Dashboard</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Toolbar', () => Toolbar);

const styles = StyleSheet.create({
    toolbarStyle: {
        backgroundColor: '#FFA500',
        flex: 0,
        flexDirection: 'row',
        height: 56,
        alignItems: 'center'
    },
    backStyle: {
        marginLeft: 10
    },
    toolbarTitle: {
        fontSize: 20,
        marginLeft: 10,
        textAlign: 'center',
        justifyContent: 'center',
        color: "#FFFFFF"
    }
});