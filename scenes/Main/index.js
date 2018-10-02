import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import ToolBar from './components/ToolBar';
import WeekList from './components/WeekList';
import BottomNavBar from './components/BottomNavBar';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.main}>
        <ToolBar />
        <WeekList />
        <BottomNavBar />
      </View>
    );
  }
}

export default connect()(Main);
