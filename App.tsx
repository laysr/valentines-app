import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes />
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="light" />
    </NavigationContainer>
  );
};

export default App;
