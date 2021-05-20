import * as React from 'react'
import { Text, View } from 'react-native'
import AppHeader from '../components/AppHeader'

export default class Courses extends React.Component{
    render(){
        return(
            <View>
                <AppHeader title="Courses" />
                <Text>Course 1</Text>
            </View>
        )
    }
}