import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';

import Main from './scenes/Main';
import reducers from './reducers';

const store = createStore(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
	  		<View style={{flex: 1}}>
	    		<Main/>
	    	</View>
      </Provider>
    );
  }
}
