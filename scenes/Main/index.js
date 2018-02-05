import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import WeekList from './components/WeekList';

class Main extends Component {

	constructor(props) {
		super(props)
		console.log(props);
	}

	render() {
	  return (
	    <View style={styles.main}>
	      <WeekList/>
	      <View style={styles.mainBottomNavBar}>
	       	<View style={styles.contentBottonNavBar}>
	      		<Text style={styles.text}>Depositado R$ 100,00</Text>
	      		<Text style={styles.text}> {this.props.total}</Text>
	      	</View>
	      </View>
	    </View>
	  );
	}
}

const mapStateToProps = state => {
	return {
  	total: state.totalDeposited,
	};
}

export default connect(mapStateToProps)(Main);

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
