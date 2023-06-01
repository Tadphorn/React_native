
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
import Detail from './screens/Detail';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    //  <View>
    //   <Splash />
    //  </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ title: 'Splash' }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Hello' }}
        />
         <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: 'Detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
