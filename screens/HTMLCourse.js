import * as React from 'react'
import {View,Text, Alert, ScrollView,Linking} from 'react-native'
import {Card,Icon,Header} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import db from '../config'
import firebase from 'firebase'

export default class HTMLCourse extends React.Component{

    render(){
        return(
            <View style={{flex:1,marginBottom:20}}>
                  <Header 
                leftComponent={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.navigate('Courses')}/>}
            centerComponent={{ text: "HTML", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
            backgroundColor = "#eaf8fe"
            />
            </View>
        )
    }
}