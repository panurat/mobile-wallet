import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './src/reducers'

import {NavigationRouter} from './src/navigations'



export default class App extends Component {
  
  render() {

    const store = createStore(reducers)

    return (
      <Provider store={store}>
        <NavigationRouter />
      </Provider>
    );
  }
}
