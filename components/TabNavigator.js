import { createBottomTabNavigator } from 'react-navigation-tabs';
import Courses from '../screens/Courses'
import * as React from 'react' 
import WelcomeScreen from '../screens/WelcomeScreen';
export const TabNavigator=createBottomTabNavigator({
    Course1:{
        screen:Courses
    },
    Course2:{
        screen:Courses
    },
  Course3:{
      screen:Courses
  }
   
},

)