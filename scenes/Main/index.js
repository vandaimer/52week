import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import WeekList from './components/WeekList';

export default class Main extends Component {

	render() {
	  return (
	    <View style={styles.main}>
	      <WeekList/>
	      <View style={styles.mainBottomNavBar}>
	       	<View style={styles.contentBottonNavBar}>
	      		<Text style={styles.text}>Depositado R$ 100,00</Text>
	      		<Text style={styles.text}>Meta R$ 100,00</Text>
	      	</View>
	      </View>
	    </View>
	  );
	}
}

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
