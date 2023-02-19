import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './screen/home';
import wengMRT from './screen/wengMRT';
import MRT from './screen/MRT';
import TestView from './screen/TestView';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator(); 


function App() {
  
  let [fontsLoaded] = useFonts({
    'ImprimaRegular': require('./assets/fonts/Imprima-Regular.ttf'),
    'IMFellGreatPrimerItalic': require('./assets/fonts/IMFellGreatPrimer-Italic.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
     <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator> 
          <Stack.Screen
            name="Test View"
            component={TestView}
          />
          <Stack.Screen
            name="MRT"
            component={MRT}
          />
          <Stack.Screen
            name="wengMRT"
            component={wengMRT}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


export default App;