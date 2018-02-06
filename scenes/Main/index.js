import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import WeekList from './components/WeekList';
import BottomNavBar from './components/BottomNavBar';

class Main extends Component {

	constructor(props) {
		super(props)
	}

	render() {
	  return (
	    <View style={styles.main}>
	      <WeekList />
				<BottomNavBar />
	    </View>
	  );
	}
}

export default connect()(Main);

const styles = StyleSheet.create({
	main: {
		flex: 1
	},
	mainBottomNavBar : {
		height: 75
	},
	contentBottonNavBar: {
		flex: 1,
		flexDirection: 'row',
		margin: 16,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	text: {
		fontWeight: 'bold'
	}
});
