import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import R from 'ramda';
import WeekItem from '../WeekItem';


class WeekList extends Component {
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

  render() {
    const createNewItem = (item) => {
      return (
        <WeekItem key={item.index} index={item.index} label={item.label} />
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

export default connect()(WeekList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});
