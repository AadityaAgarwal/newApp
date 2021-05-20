import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import TabNavigator from './screens/Courses';
import AboutUs from './screens/AboutUs';
import Courses from './screens/Courses';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  AboutUs: AboutUs,
  //  Courses:Courses,
  Tab: TabNavigator
})

const AppContainer = createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
