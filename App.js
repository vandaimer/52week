/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Main from './scenes/Main';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{flex: 1}}>
        <Main/>
      </View>
    );
  }
}