import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    Button,
    ActivityIndicator,
    TextInput,
    StyleSheet
} from 'react-native';
import firebaseAuth from '../FirebaseAuth.js'
import Toolbar from './Toolbar'
import ToolbarLoginForm from './ToolbarLoginForm'
import {TextField} from 'react-native-material-textfield'
import colors from './colors.js'

export default class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onLogoutPress() {
        this.setState({error: '', loading: true});
        firebaseAuth
            .signOut()
            .then(() => {
                this.setState({error: '', loading: false});
                this.state.email = '';
                this.state.password = '';
                this.state.loading = false;
                this.state.authUser = null;
            })
            .catch(() => {
                this.setState({error: 'Some Error Occured', loading: false});
                this.state.email = '';
                this.state.password = '';
                this.state.loading = false;
                this.state.authUser = null;
            })
    }

    onLoginPress() {
        this.setState({error: '', loading: true});
        const {email, password} = this.state;
        firebaseAuth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({error: '', loading: false});
            })
            .catch(() => {
                //Login was not successful, let's create a new account
                firebaseAuth
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        this.setState({error: '', loading: false});
                    })
                    .catch(() => {
                        this.setState({error: 'Authentication failed.', loading: false});
                    });
            });
    }
    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <ActivityIndicator
                style={styles.activityIndicator}
                color={colors.colorSpinner}
                size="small"/>;
        }

        if (this.state.authUser == null) {
            return <Button
                color={colors.colorPrimaryDark}
                onPress={this
                .onLoginPress
                .bind(this)}
                title='Log In'/>;
        } else {
            return <Button
                color={colors.colorPrimaryDark}
                onPress={this
                .onLogoutPress
                .bind(this)}
                title='Log Out'/>;
        }

    }

    popBack() {
        this
            .props
            .navigation
            .goBack(null)
    }

    render() {
        return (
            <View style={styles.container}>
                <ToolbarLoginForm popBack={this.popBack}/>
                <View style={styles.loginField}>
                    <TextField
                        placeholder='you@domain.com'
                        value={this.state.email}
                        tintColor={colors.colorEditTextTint}
                        onChangeText={email => this.setState({email})}/>
                    <TextField
                        autoCorrect={false}
                        placeholder='*******'
                        secureTextEntry
                        value={this.state.password}
                        tintColor={colors.colorEditTextTint}
                        onChangeText={password => this.setState({password})}/>
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                    {this.renderButtonOrSpinner()}
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('LoginForm', () => LoginForm);

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.colorPrimary,
        flex: 1,
        flexDirection: 'column'
    },
    loginField: {
        marginLeft: 40,
        marginRight: 40
    },
    errorTextStyle: {
        color: colors.colorError,
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        backgroundColor: 'red'
    }
});