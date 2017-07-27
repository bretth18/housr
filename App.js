import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/configureStore';

import MainApp from './app/navigation/MainApp';

class ReduxApp extends React.Component {
 store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <MainApp />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('housr', () => ReduxApp);

export default ReduxApp;
