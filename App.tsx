import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { globalInitialState, GlobalProvider, globalReducer } from './src/context/global';
import { Router } from './src/navigation/router/Router';

const App = () => {
  return (
    <GlobalProvider state={globalInitialState} reducer={globalReducer}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </GlobalProvider>
  );
};

export default App;
