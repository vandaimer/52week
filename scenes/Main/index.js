import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'unistore/react';
import ToolBar from './components/ToolBar';
import WeekList from './components/WeekList';
import BottomNavBar from './components/BottomNavBar';
import { actions } from '../../reducers';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

class Main extends Component {
  componentDidMount () {
    this.props.loadFromStorage();
  }

  render () {
    return (
      <View style={styles.main}>
        <ToolBar />
        <WeekList />
        <BottomNavBar />
      </View>
    );
  }
}

Main.propTypes = {
  loadFromStorage: PropTypes.func.isRequired,
};

export default connect(
  null,
  actions,
)(Main);
