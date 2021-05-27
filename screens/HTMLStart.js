import * as React from 'react'
import { Text, View,Image } from 'react-native'
import {Card} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AppHeader from '../components/AppHeader'

export default class HTMLStart extends React.Component{
    
    render(){
        return(
            <View>
                <AppHeader title="Courses" />
                <View>
                    <Card>
                        <Card.Title style={{fontSize:20,textDecorationLine:'underline'}}>HTML</Card.Title>
                            <Image 
                           source={{uri:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/32/b88140502611e5bf374909c194f0db/introhtml_thumnail_1x1.png?auto=format%2Ccompress&dpr=1'}}
                            style={{width:300,height:200,marginTop:10}}
                            />
                            <Card.Title>First developed by Tim Berners-Lee in 1990, HTML is short for Hypertext Markup Language. HTML is used to create electronic documents (called pages) that are displayed on the World Wide Web. HTML code ensures the proper formatting of text and images for your Internet browser.</Card.Title>
                   <TouchableOpacity onPress={()=>{this.props.navigation.navigate('HTMLCourse')}}>
                       <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>Start Course!</Text>
                   </TouchableOpacity>
                    </Card>
                </View>
            </View>
        )
    }
}