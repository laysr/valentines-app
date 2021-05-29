import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import ScanQRCode from '../screens/ScanQRCode';

type StackParamList = {
  Home: undefined;
  ScanQRCode: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScanQRCode"
        component={ScanQRCode}
        options={{ title: 'Escanear QR Code' }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
