import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {name as appName} from './app.json';
import App from './src/App';
import store, {persister} from './src/redux/store';

const Root = () => (
  <ReduxProvider store={store}>
    <PersistGate persistor={persister} loading={null}>
      <App />
    </PersistGate>
  </ReduxProvider>
);

AppRegistry.registerComponent(appName, () => Root);
