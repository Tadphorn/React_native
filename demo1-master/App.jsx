
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
import Detail from './screens/Detail';
import Search from './screens/Search';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {

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
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: 'Search' }}
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
