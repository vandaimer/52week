import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import R from 'ramda';
import WeekItem from '../WeekItem';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});


class WeekList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      weeks: [],
    };

    const weeks = R.range(1, 53);
    const mininalDeposit = 5;
    let meta = 0;

    R.forEach(index => {
      const value = index * mininalDeposit;

      // const percentage = value * 100 / savingsAccountInfo;

      this.state.weeks.push({
        isDeposited: false,
        value,
        index,
      });

      meta += value;
    }, weeks);

    this.props.maxSavingsAccoutAmount(meta);
  }

  render () {
    const createNewItem = item => {
      return (
        <WeekItem key={item.index} week={item.index} value={item.value} />
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

WeekList.propTypes = {
  maxSavingsAccoutAmount: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(WeekList);
