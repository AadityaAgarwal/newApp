import * as React from 'react'
import {View,Text,Alert} from 'react-native'
import {DrawerItems,createDrawerNavigator} from 'react-navigation-drawer'
import AboutUs from '../screens/AboutUs'
import Courses from '../screens/Courses'
import MyCourses from '../screens/MyCourses'
import CustomSideDrawer from './customSideDrawer'

export const DrawerNavigator=createDrawerNavigator({
    AboutUs:{
        screen:AboutUs,
    },
    MyCourses:{
      screen:MyCourses  
    },
    Courses:{
        screen:Courses
    }
},
{
    contentComponent:CustomSideDrawer
},
{
    initialRouteName:'AboutUs'
}
)