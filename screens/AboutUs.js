import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AppHeader } from '../components/AppHeader'
import { Header } from 'react-native-elements'

export default class AboutUs extends React.Component {

    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: "About Us", style: { fontSize: 20, color: 'white', fontWeight: 'bold', textDecorationLine: 'underline' } }}
                    backgroundColor="cyan"
                />

                <TouchableOpacity onPress={() => {
                 this.props.navigation.navigate('Courses')
                }}>
                    <Text>Get Started!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}