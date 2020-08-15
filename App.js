import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import ListScreen from './src/screens/ListScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="LoginScreen" component={LoginScreen} left={() => null} title="IIUM CANTEEN" initial={true} />
          <Scene key="SignupScreen" component={SignupScreen} left={() => null} title="IIUM CANTEEN " />
          <Scene key="ListScreen" component={ListScreen} left={() => null} title="IIUM CANTEEN " />

        </Scene>
      </Router>
    )
  }
}