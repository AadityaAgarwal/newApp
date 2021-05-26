import * as React from 'react' 
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HTMLStart from '../screens/HTMLStart'
import CyberStart from '../screens/CyberStart';
import CyberCourse from '../screens/CyberCourse';
import MyCourses from '../screens/MyCourses';
import WelcomeScreen from '../screens/WelcomeScreen';
export const TabNavigator=createBottomTabNavigator({
    // Courses:{
    //     screen:Courses
    // }, 
 CyberSecurity:{
     screen:CyberStart
 },
 HTML:{
     screen:HTMLStart
 }

},
// {
//     initialRouteName:Courses
// },

)