import BottomNavigation, {Tab} from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator
} from 'react-native';

export default class BottomNavBar extends Component {

    render() {
        return (
            <View>
                <BottomNavigation
                    onTabChange={(newTabIndex) => this.props.onTabChange(newTabIndex)}
                    labelColor="white"
                    rippleColor="white"
                    style={{
                    height: 56,
                    elevation: 8,
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0
                }}>
                    <Tab
                        barBackgroundColor="#FFA500"
                        label="Popular Notes"
                        icon={< Icon size = {
                        24
                    }
                    color = "white" name = "collections-bookmark" />}/>
                    <Tab
                        barBackgroundColor="#FFA500"
                        label="My Notes"
                        icon={< Icon size = {
                        24
                    }
                    color = "white" name = "collections" />}/>
                </BottomNavigation>
            </View>
        );

    }
}

AppRegistry.registerComponent('BottomNavBar', () => BottomNavBar);