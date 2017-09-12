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

var dataList = [];

export default class PopularNotes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
        dataList = [];
        this.fetchMyPosts();
    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps
        dataList = [];
        this.fetchMyPosts();
    }

    fetchMyPosts() {
        var root = this;
        var myUserId = firebaseAuth.currentUser.uid;

        var userPostsRef;
        if (this.props.tabPosition == 0) {
            userPostsRef = firebaseDatabase.ref('posts');
        } else {
            userPostsRef = firebaseDatabase.ref('user-posts/' + myUserId);
            userPostsRef.on("value", function (snapshot) {
                if (snapshot.numChildren() == 0) {
                    dataList = [];
                    root.setState({data: dataList, loading: false})
                }
            })
        }

        userPostsRef
            .on('child_added', function (dataObject) {
                dataList.splice(0, 0, dataObject)
                root.setState({data: dataList, loading: false})
            });

        userPostsRef.on('child_changed', function (dataObject) {});

        userPostsRef.on('child_removed', function (dataObject) {});
    }

    getView() {
        if (this.state.loading) {
            return <ActivityIndicator
                style={styles.activityIndicator}
                color={colors.colorSpinner}
                size="large"/>;
        } else {
            return <FlatList
                data={this.state.data}
                renderItem={({item}) => <FirebaseNote firebaseItem={item}/>}/>;
        }
    }

    render() {
        return (
            <View >
                {this.getView()}
            </View>
        );

    }
}
AppRegistry.registerComponent('PopularNotes', () => PopularNotes);

const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
});
