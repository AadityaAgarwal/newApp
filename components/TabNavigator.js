import { createBottomTabNavigator } from 'react-navigation-tabs';
import Courses from '../screens/Courses'
import * as React from 'react' 
import WelcomeScreen from '../screens/WelcomeScreen';
export const TabNavigator=createBottomTabNavigator({
    Courses:{
        screen:Courses
    }, 
},

)