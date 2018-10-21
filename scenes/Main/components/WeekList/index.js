import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'unistore/react';
import { StyleSheet, View, ScrollView } from 'react-native';
import R from 'ramda';
import WeekItem from '../WeekItem';
import { props, actions } from '../../../../reducers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

class WeekList extends Component {
  render () {
    const { weeks } = this.props;

    const createNewItem = item => {
      return <WeekItem key={item.index} week={item.index} value={item.value} isDeposited={item.isDeposited} />;
    };

    return (
      <View style={styles.container}>
        <ScrollView>{R.map(createNewItem, weeks)}</ScrollView>
      </View>
    );
  }
}

WeekList.propTypes = {
  maxSavingsAccoutAmount: PropTypes.func.isRequired,
  weeks: PropTypes.array.isRequired,
};

export default connect(
  props,
  actions,
)(WeekList);
