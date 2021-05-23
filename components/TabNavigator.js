import * as React from 'react' 
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Courses from '../screens/Courses'
import MyCourses from '../screens/MyCourses';
import WelcomeScreen from '../screens/WelcomeScreen';
export const TabNavigator=createBottomTabNavigator({
    // Courses:{
    //     screen:Courses
    // }, 
    MyCourses:{
        screen:MyCourses
    },
},
// {
//     initialRouteName:Courses
// },

)