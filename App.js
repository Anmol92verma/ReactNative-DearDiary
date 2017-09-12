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
  ActivityIndicator
} from 'react-native';
import firebaseAuth from './FirebaseAuth.js'
import SplashScreen from './SplashScreen'
import LoginForm from './ui/LoginForm'
import Router from './ui/Router'

export default class App extends Component {

  componentWillMount() {
    this.setState({authUser: null, showLoginForm: false})
  }

  componentDidMount() {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        this.setState({authUser: user, showLoginForm: false})
      } else {
        this.setState({authUser: null, showLoginForm: true})
      }
    });
  }

  render() {
    if (this.state.authUser) {
      return (<Router/>);
    } else if (this.state.showLoginForm) {
      return (<LoginForm/>);
    } else {
      return (<SplashScreen/>);
    }
  }
}
AppRegistry.registerComponent('App', () => App);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#FFC300'
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
});
