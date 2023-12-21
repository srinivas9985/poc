// App.js

import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';

import store from './src/Redux/Store';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
