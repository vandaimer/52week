import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';


const styles = StyleSheet.create({
  mainBottomNavBar: {
    height: Platform.OS === 'ios' ? 128 : 94,
    padding: 32,
  },
  boxShadow: {
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 16,
  },
  contentBottonNavBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 10,
    color: '#9B9B9B',
  },
  textAmount: {
    fontWeight: 'bold',
    color: '#7FC830',
    fontSize: 20,
    flex: 1,
  },
  labeledBox1: {
    flexDirection: 'column',
  },
  labeledBox2: {
    width: 132,
    flexDirection: 'column',
  },

});


class BottomNavBar extends Component {
  render () {
    return (
      <View style={[styles.mainBottomNavBar, styles.boxShadow]}>
        <View style={styles.contentBottonNavBar}>
        <View style={styles.labeledBox1}>
          <Text style={styles.text}>META</Text>
          <Text style={styles.textAmount}>R$ {this.props.savingsAccountInfo} ({this.props.savingsPercentage}%)</Text>
          </View>
          <View style={styles.labeledBox2}>
            <Text style={styles.text}>DEPOSITADO </Text>
            <Text style={styles.textAmount}>R$ {this.props.totalSavingsAmount}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {
    totalSavingsAmount,
    savingsAccountInfo,
  } = state;

  var savingsPercentage = totalSavingsAmount * 100 / savingsAccountInfo;
  var savingsPercentage = savingsPercentage.toFixed(1);

  return {
    totalSavingsAmount,
    savingsAccountInfo,
    savingsPercentage,
  };
};

BottomNavBar.propTypes = {
  savingsAccountInfo: PropTypes.number.isRequired,
  totalSavingsAmount: PropTypes.number.isRequired,
};


export default connect(mapStateToProps)(BottomNavBar);
