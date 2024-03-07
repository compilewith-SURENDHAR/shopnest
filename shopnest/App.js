import React, {  useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './src/navigation/BottomTabNavigation'

const stack = createNativeStackNavigator()

export default function App() {

  const [fontLoaded] = useFonts(
    {
      SemiBold : require("./assets/fonts/Poppins-SemiBold.ttf"),
      Regular : require("./assets/fonts/Poppins-Regular.ttf"),
      Medium : require("./assets/fonts/Poppins-Medium.ttf"),
      Light : require("./assets/fonts/Poppins-Light.ttf"),
      ExtraBold : require("./assets/fonts/Poppins-ExtraBold.ttf"),
      Bold : require("./assets/fonts/Poppins-Bold.ttf")
      
    }
  );

  const onLayoutRootView = useCallback(
    async() => {
      if (fontLoaded){
        await SplashScreen.hideAsync();
      }
    }, [fontLoaded]
  );
  if (!fontLoaded){
    return null;
  }

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
        name='BottomTabNavigation'
        component={BottomTabNavigation}
        options={{headerShown:false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container : {},
  header : {
    fontFamily: 'SemiBold',
    fontSize : 25
  }
});
