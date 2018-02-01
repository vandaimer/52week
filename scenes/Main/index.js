/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import WeekList from './components/WeekList';

export default class Main extends Component<{}> {

  render() {
    return (
      <View style={{flex: 1}}>
        <WeekList/>
      </View>
    );
  }
}