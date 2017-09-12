import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableHighlight,
    View,
    Text,
    Image
} from 'react-native';

class FirebaseNote extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight>
                    <View>
                        <Text style={styles.inputTitleStyle}>{this
                                .props
                                .firebaseItem
                                .val()
                                .title}</Text>
                        <Text style={styles.inputDescriptionStyle}>{this
                                .props
                                .firebaseItem
                                .val()
                                .body}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 5
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
})

export default FirebaseNote;
AppRegistry.registerComponent('FirebaseNote', () => FirebaseNote);
