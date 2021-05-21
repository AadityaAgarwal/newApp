import * as React from 'react'
import {View,Text,Alert} from 'react-native'
import {DrawerItems,createDrawerNavigator} from 'react-navigation-drawer'
import AboutUs from '../screens/AboutUs'
import CustomSideDrawer from './customSideDrawer'

export const DrawerNavigator=createDrawerNavigator({
    AboutUs:{
        screen:AboutUs,
    },
    Courses:{
        
    }
},
{
    contentComponent:CustomSideDrawer
},
{
    initialRouteName:'AboutUs'
}
)