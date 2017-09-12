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
    ActivityIndicator,
    FlatList
} from 'react-native';
import firebaseDatabase from '../FirebaseDatabase'
import firebaseAuth from '../FirebaseAuth'
import BottomNavBar from './BottomNavBar'
import Toolbar from './Toolbar'
import colors from './colors.js'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import FirebaseNote from './FirebaseNote'
import PopularNotes from './PopularNotes'

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        state = {
            tab: 0
        }

        this.onTabChange = this
            .onTabChange
            .bind(this)
    }

    componentWillMount() {
        this.setState({tab: 0})
    }

    onTabChange(position) {
        this.setState({tab: position})
    }

    getNotes() {
        return <PopularNotes tabPosition={this.state.tab}/>;
    }

    render() {
        return (
            <View style={styles.containerMain}>
                <Toolbar></Toolbar>
                <View style={styles.container}>
                    {this.getNotes()}
                    <ActionButton
                        buttonColor={colors.colorError}
                        style={styles.actionButtonStyle}
                        onPress={() => this.props.navigation.navigate('createNote')}></ActionButton>
                </View>

                <BottomNavBar onTabChange={this.onTabChange}/>
            </View>
        );

    }
}
AppRegistry.registerComponent('Dashboard', () => Dashboard);

const styles = StyleSheet.create({
    containerMain: {
        backgroundColor: '#FFC300',
        flex: 1,
        flexDirection: 'column'
    },
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
    },
    actionButtonStyle: {
        marginBottom: 40
    }
});
