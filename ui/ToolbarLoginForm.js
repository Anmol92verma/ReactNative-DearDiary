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
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogoutIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Dashboard as dashboard} from './Dashboard'
import colors from './colors.js'

export default class ToolbarLoginForm extends Component {

    constructor(props) {
        super(props)
    }

    handleBack = () => {}

    render() {
        return (
            <View style={styles.toolbarStyle}>
                {/*  <Icon
                    onPress={this.handleBack}
                    style={styles.backStyle}
                    name="arrow-back"
                    size={30}
                    color={colors.colorWhite}/> */}
                <Text style={styles.toolbarTitle}>Login To Notes!</Text>
            </View>
        );
    }
}
AppRegistry.registerComponent('ToolbarLoginForm', () => ToolbarLoginForm);

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
    toolbarTitle: {
        fontSize: 20,
        marginLeft: 10,
        textAlign: 'center',
        justifyContent: 'center',
        color: colors.colorWhite
    }
});