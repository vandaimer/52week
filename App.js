import React, { Component } from 'react';
import { View } from 'react-native';
import createStore from 'unistore';
import { Provider } from 'unistore/react';

import Main from './scenes/Main';
import { initialState } from './reducers';

const store = createStore(initialState);

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <View style={ { flex: 1 } }>
          <Main/>
        </View>
      </Provider>
    );
  }
}
