import * as React from 'react'
import {View,Text,Alert} from 'react-native'
import {DrawerItems,createDrawerNavigator} from 'react-navigation-drawer'
import AboutUs from '../screens/AboutUs'

export const DrawerNavigator=createDrawerNavigator({
    AboutUs:{
        screen:AboutUs,
    }
})