import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'unistore/react';
import { props, actions } from '../../../../reducers';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  basicList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 32,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#bbb',
  },
  itemList: {},
  itemListDeposited: {
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  basicCommand: {
    width: 132,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 8,
    paddingTop: 16,
    paddingBottom: 16,
  },
  textNotDeposited: {
    color: '#42ABF4',
    fontSize: 16,
  },
  btnNotDeposited: {
    backgroundColor: 'white',
    borderColor: '#42ABF4',
    borderWidth: 1,
  },
  textDeposited: {
    color: 'white',
    fontSize: 16,
  },
  btnDeposited: {
    backgroundColor: '#42ABF4',
  },
  weekText: {
    marginRight: 32,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 10,
    color: '#9B9B9B',
  },
});

class WeekItem extends Component {
  changeAmountSavingsAccount = () => {
    const value = parseInt(this.props.value, 0);
    const { week } = this.props;

    this.props.changeWeekItem(value, week);
  };

  render () {
    return (
      <View
        style={[
          this.props.isDeposited ? styles.itemListDeposited : styles.itemList,
          styles.basicList,
        ]}
      >
        <View>
          <Text style={[styles.text, styles.weekText]}>Semana {this.props.week}</Text>
          <Text style={styles.label}>VALOR: R$ {this.props.value}</Text>
        </View>
        <TouchableOpacity
          style={[
            this.props.isDeposited ? styles.btnDeposited : styles.btnNotDeposited,
            styles.basicCommand,
          ]}
          onPress={this.changeAmountSavingsAccount}
        >
          <Text style={this.props.isDeposited ? styles.textDeposited : styles.textNotDeposited}>
            {this.props.isDeposited ? 'Depositado' : 'Depositar'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

WeekItem.propTypes = {
  week: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  changeWeekItem: PropTypes.func.isRequired,
};

export default connect(
  props,
  actions,
)(WeekItem);
