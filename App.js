import React from 'react'
import {Provider} from 'jotai'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HomeScreen,
  AdvancedSettingScreen
} from './src/screens'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
          <Stack.Screen name="Advanced" component={AdvancedSettingScreen} options={{ title: 'Advanced' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;