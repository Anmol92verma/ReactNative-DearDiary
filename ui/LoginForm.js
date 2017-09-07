import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    Button,
    ActivityIndicator,
    TextInput
} from 'react-native';
import firebaseAuth from '../FirebaseAuth.js'
import Toolbar from './Toolbar'

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
                color='#bc2b78'
                size="small"/>;
        }

        if (this.state.authUser == null) {
            return <Button
                onPress={this
                .onLoginPress
                .bind(this)}
                title='Log In'/>;
        } else {
            return <Button
                onPress={this
                .onLogoutPress
                .bind(this)}
                title='Log Out'/>;
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <Toolbar/>
                <TextInput
                    placeholder='you@domain.com'
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}/>
                <TextInput
                    autoCorrect={false}
                    placeholder='*******'
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}/>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                {this.renderButtonOrSpinner()}
            </View>
        );
    }
}

AppRegistry.registerComponent('LoginForm', () => LoginForm);

const styles = {
    container: {
        backgroundColor: '#FFC300',
        flex: 1,
        flexDirection: 'column'
    },
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
};