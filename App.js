import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View, Text } from 'react-native';
import createSagaMiddleware from 'redux-saga';

import Main from './scenes/Main';
import reducers from './reducers';
import rootSaga from './services';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)


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
