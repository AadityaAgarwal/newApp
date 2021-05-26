import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { TabNavigator } from './components/TabNavigator';
import AboutUs from './screens/AboutUs';
import WelcomeScreen from './screens/WelcomeScreen';
import CyberCourse from './screens/CyberCourse';
import { DrawerNavigator } from './components/drawerNavigator';
import TestScreen from './screens/TestScreen';
import HTMLStart from './screens/HTMLStart';
import HTMLCourse from './screens/HTMLCourse';
import HTMLTestScreen from './screens/HTMLTestScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  DrawerNavigator: DrawerNavigator,
   CyberCourse: CyberCourse,
  TestScreen: TestScreen,
  Tab:{
    screen:TabNavigator
},
HTMLStart:{screen:HTMLStart},
HTMLCourse:HTMLCourse,
HTMLTestScreen:HTMLTestScreen,
})

const AppContainer = createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});