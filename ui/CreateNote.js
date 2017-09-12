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
    TextInput
} from 'react-native';
import firebaseDatabase from '../FirebaseDatabase'
import firebaseAuth from '../FirebaseAuth'
import BottomNavBar from './BottomNavBar'
import TollbarCreateNotes from './TollbarCreateNotes'
import colors from './colors.js'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.popBack = this
            .popBack
            .bind(this);
        this.saveNote = this
            .saveNote
            .bind(this);
        this.state = {
            title: '',
            desc: ''
        }
    }

    popBack() {
        this
            .props
            .navigation
            .goBack(null)
    }

    saveNote() {
        // A post entry.
        var user = firebaseAuth.currentUser;

        var d = new Date();
        var millis = d.getTime();

        var description = this.state.desc;
        var title = this.state.title;

        var postData = {
            author: user.displayName,
            uid: user.uid,
            body: description,
            title: title,
            time: millis,
            starCount: 0,
            authorPic: user.photoURL
        };

        // Get a key for a new Post.
        var newPostKey = firebaseDatabase
            .ref()
            .child('posts')
            .push()
            .key;

        // Write the new post's data simultaneously in the posts list and the user's
        // post list.
        var updates = {};
        updates['/posts/' + newPostKey] = postData;
        updates['/user-posts/' + user.uid + '/' + newPostKey] = postData;
        console.log(postData)

        firebaseDatabase
            .ref()
            .update(updates)
            .then(this.popBack());
    }

    render() {
        return (
            <View style={styles.container}>
                <TollbarCreateNotes
                    title={this.state.title}
                    desc={this.state.desc}
                    saveNote={this.saveNote}
                    popBack={this.popBack}></TollbarCreateNotes>

                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.inputTitleStyle}
                        autoFocus={true}
                        placeholder='Note Title...'
                        placeholderTextColor={colors.colorSpinner}
                        returnKeyType='next'
                        underlineColorAndroid="transparent"
                        selectionColor={colors.colorEditTextTint}
                        onChangeText={(text) => this.setState({title: text})}
                        value={this.state.title}/>

                    <TextInput
                        style={styles.inputDescriptionStyle}
                        multiline={true}
                        placeholder='Note Description...'
                        placeholderTextColor={colors.colorSpinner}
                        returnKeyType='done'
                        underlineColorAndroid="transparent"
                        selectionColor={colors.colorEditTextTint}
                        onChangeText={(text) => this.setState({desc: text})}
                        value={this.state.desc}/>
                </View>
            </View>
        );

    }
}
AppRegistry.registerComponent('CreateNote', () => CreateNote);

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
    },
    actionButtonStyle: {
        marginBottom: 40
    },
    textInputContainer: {
        flex: 1
    },
    inputTitleStyle: {
        height: 60,
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 0,
        fontFamily: 'Lato-Regular',
        fontSize: 20
    },
    inputDescriptionStyle: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 60,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        textAlignVertical: 'top'
    }
});
