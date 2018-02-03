/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';
import R from 'ramda';

export default class WeekItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeposited : false
    };
  }

  wasDeposited = () => {
    const isDeposited = !this.state.isDeposited;
    this.setState({ isDeposited: isDeposited });
  }

  render() {
     return (
       <View style={[(this.state.isDeposited) ? styles.itemListDeposited : styles.itemList]}>
          <Text style={styles.text}>Depositar {this.props.label}</Text>
          <View style={styles.command}>
            <Button
                  onPress={() => {
                    this.wasDeposited();
                  }}
                  title="Depositado"/>
          </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    margin: 16,
    padding: 16,
  },
  itemList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 16,
    borderBottomWidth: 1,
  },
  itemListDeposited: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 16,
    borderBottomWidth: 1,
    backgroundColor: 'green'
  },
  command: {
    width: 100,
    margin: 16,
    height: 35,
    marginTop: 25,
    alignItems: "center",
  }
});
