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
import Dashboard from './ui/Dashboard'

export default class App extends Component {

  componentWillMount() {
    this.setState({authUser: null, showLoginForm: false})
  }

  componentDidMount() {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        console.warn("User exists onAuthStateChanged")
        setTimeout(() => {
          this.setState({authUser: user, showLoginForm: false})
          console.warn("setState authUser received")
        }, 2000);
      } else {
        console.warn("User not exists onAuthStateChanged")
        setTimeout(() => {
          this.setState({authUser: null, showLoginForm: true})
          console.warn("User not exists showloginform onAuthStateChanged" + JSON.stringify(this.state))
        }, 2000);
      }
    });
  }

  render() {
    console.warn("inside render" + JSON.stringify(this.state))
    if (this.state.authUser) {
      console.warn("User exists Dashboard")
      return (<Dashboard/>);
    } else if (this.state.showLoginForm) {
      console.warn("User not exists showLoginForm")
      return (<LoginForm/>);
    } else {
      console.warn("User not exists splash screen")
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
