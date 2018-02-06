import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

class BottomNavBar extends Component {
	render() {
	  return (
        <View style={styles.mainBottomNavBar}>
        <View style={styles.contentBottonNavBar}>
            <Text style={styles.text}>Depositado R$ 100,00</Text>
            <Text style={styles.text}> {this.props.total}</Text>
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

export default connect(mapStateToProps)(BottomNavBar);

const styles = StyleSheet.create({
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
