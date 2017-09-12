import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Button,
    ActivityIndicator,
    TouchableHighlight,
    BackHandler
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogoutIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Dashboard as dashboard} from './Dashboard'
import colors from './colors.js'
import CreateNote from './CreateNote'

export default class ToolbarLoginForm extends Component {

    constructor(props) {
        super(props)
        this._handleBackButton = this
            ._handleBackButton
            .bind(this)
    }

    componentDidMount() {
        BackHandler.addEventListener('backPress', this._handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('backPress', this._handleBackButton);
    }

    _handleBackButton() {
        if (this.props.title == '') {
            this.goBack()
        } else {
            this.addNote()
        }
        this.goBack()
        return true
    }

    goBack() {
        this
            .props
            .popBack()
    }

    addNote() {
        this
            .props
            .saveNote()
    }

    render() {
        return (
            <View style={styles.toolbarStyle}>
                <Icon
                    onPress={this
                    .goBack
                    .bind(this)}
                    style={styles.backStyle}
                    name="arrow-back"
                    size={30}
                    color={colors.colorWhite}/>
                <Text style={styles.toolbarTitle}>Create Note</Text>

                <Icon
                    onPress={this
                    .addNote
                    .bind(this)}
                    style={styles.saveIcon}
                    name="done"
                    size={30}
                    color={colors.colorWhite}/>
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
    },
    saveIcon: {
        marginLeft: 'auto',
        paddingRight: 20
    }
});