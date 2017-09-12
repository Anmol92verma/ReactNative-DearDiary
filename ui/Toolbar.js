import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Button,
    ActivityIndicator,
    TouchableHighlight,
    BackHandler,
    BackAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LogoutIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import firebaseAuth from '../FirebaseAuth'
import {Dashboard as dashboard} from './Dashboard'
import colors from './colors.js'

export default class Toolbar extends Component {

    logout = () => {
        firebaseAuth.signOut();
        console.warn("Logout Requested")
    }

    render() {
        return (
            <View style={styles.toolbarStyle}>
                {/* <Icon
                    onPress={this.handleBack}
                    style={styles.backStyle}
                    name="navicon"
                    size={30}
                    color={colors.colorWhite}/> */}
                <Text style={styles.toolbarTitle}>Dashboard</Text>
                <LogoutIcon
                    onPress={this.logout}
                    style={styles.logoutIcon}
                    name="logout"
                    size={30}
                    color={colors.colorWhite}/>
            </View>
        );
    }
}
AppRegistry.registerComponent('Toolbar', () => Toolbar);

const styles = StyleSheet.create({
    toolbarStyle: {
        backgroundColor: colors.colorPrimaryDark,
        flex: 0,
        flexDirection: 'row',
        height: 56,
        alignItems: 'center'
    },
    backStyle: {
        marginLeft: 10
    },
    logoutIcon: {
        marginLeft: 'auto',
        paddingRight: 20
    },
    toolbarTitle: {
        fontSize: 20,
        marginLeft: 10,
        textAlign: 'center',
        justifyContent: 'center',
        color: colors.colorWhite
    }
});