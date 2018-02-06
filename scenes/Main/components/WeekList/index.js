import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
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
    const mininalDeposit = 5;
    let meta = 0;

    R.map(index => {
        const value = index * mininalDeposit;

        this.state.weeks.push({
          isDeposited: false,
          label: value,
          index
        });

        meta += value;
    }, weeks);

    this.props.maxSavingsAccoutAmount(meta);
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(WeekList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});
