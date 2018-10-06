import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { connect } from 'unistore/react';
import { props, actions } from '../../../../reducers';

const styles = StyleSheet.create({
  mainToolBar: {
    ...Platform.select({
      ios: {
        height: 128,
        paddingBottom: 24,
      },
      android: {
        height: 104,
        paddingBottom: 16,
      },
    }),
    backgroundColor: '#42ABF4',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: 3,
  },
  boxShadow: {
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 16,
  },
  title: {
    color: 'white',
    fontSize: Platform.OS === 'ios' ? 42 : 20,
  },
});

class ToolBar extends Component {
  render() {
    return (
      <View style={[styles.mainToolBar, styles.boxShadow]}>
        <View>
          <Text style={styles.title}>52 Semanas</Text>
        </View>
      </View>
    );
  }
}

ToolBar.propTypes = {
  savingsAccountInfo: PropTypes.number.isRequired,
  totalSavingsAmount: PropTypes.number.isRequired,
};

export default connect(
  props,
  actions,
)(ToolBar);
