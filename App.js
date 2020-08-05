import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { YellowBox } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './src/config/ReactotronConfig';

import { store, persistor } from './src/store';
import Routes from './src/routes';

export default function App() {
  YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
          <StatusBar style="light" />
        </PersistGate>
      </Provider>
    </>
  );
}
