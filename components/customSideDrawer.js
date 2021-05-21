import * as React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'

export default class CustomSideDrawer extends React.Component{

    render(){
        return(
            <View style={{marginTop:30}}>
                <DrawerItems {...this.props} />
            </View>
        )
    }
}