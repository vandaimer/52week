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

export default class Main extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      weeks : []
    };

    const weeks = R.range(1, 53);
    const incrementDeposit = 5;
    var toDeposit = incrementDeposit;

    R.map(index => {
        this.state.weeks.push({
          isDeposited: false,
          label: toDeposit,
          index
        });

        toDeposit += incrementDeposit;
    }, weeks);
  }

  wasDeposited = (index) => {
    const weeks = this.state.weeks;
    const week = weeks[index-1];
    const isDeposited = week.isDeposited;

    week.isDeposited = week.isDeposited ? false : true;
    this.setState({weeks});
  }

  render() {
    const createNewItem = (item) => {
      return (
        <View key={item.index} style={[(item.isDeposited) ? styles.itemListDeposited : styles.itemList]}>
          <Text style={styles.text}>Depositar {item.label}</Text>
          <View style={styles.command}>
            <Button
                  onPress={() => {
                    this.wasDeposited(item.index);
                  }}
                  title="Depositado"/>
          </View>
        </View>
      );
    };

    return (
      <View style={styles.container}>
        <ScrollView>
          {R.map(createNewItem, this.state.weeks)}
        </ScrollView>
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
