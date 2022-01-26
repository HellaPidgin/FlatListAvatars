import * as React from 'react';

// Navigation dependences are not necessary but are nice to have.
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Ui from './app/ui';
import { AppProvider } from './app/provider';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Contacts"
            component={Ui}
            options={{
              title: 'Contacts',
              headerTitleAlign: 'center'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

