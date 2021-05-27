import * as React from 'react'
import { View, Text, Alert, ScrollView, Linking } from 'react-native'
import { Card, Icon, Header } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import db from '../config'
import firebase from 'firebase'

export default class HTMLCourse extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, marginBottom: 20 }}>
                <Header
                    leftComponent={<Icon name='arrow-left' type='feather' color='#696969' onPress={() => this.props.navigation.navigate('Courses')} />}
                    centerComponent={{ text: "HTML", style: { color: '#90A5A9', fontSize: 20, fontWeight: "bold", } }}
                    backgroundColor="#eaf8fe"
                />
                <ScrollView style={{ width: '100%' }} >

                    <Card>
                        <Card.Title style={{ fontSize: 20, textDecorationLine: 'underline' }}>How to Make a Super Simple HTML webpage?</Card.Title>
                        <Text>If you're an absolute beginner in web development, you can learn the basics of HTML here. This video covers setting up an HTML file, and the basic HTML tags and what they mean.</Text>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('https://youtu.be/PlxWf493en4')
                        }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>Start!!</Text>
                        </TouchableOpacity>
                    </Card>

                    <Card>
                        <Card.Title style={{ fontSize: 20, textDecorationLine: 'underline' }}>Learn CSS</Card.Title>
                        <Text>Introduction to CSS, explaination of how to link a CSS file with an HTML document and teaching the syntax of the language along with the most common properties.</Text>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('https://youtu.be/0afZj1G0BIE')
                        }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>Start!!</Text>
                        </TouchableOpacity>
                    </Card>

                    <Card>
                        <Card.Title style={{ fontSize: 20, textDecorationLine: 'underline' }}>Blockquotes</Card.Title>
                        <Text>Sometimes we need to quote somebody, and we can do that within HTML by using what's known as the blockquote element.</Text>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('https://youtu.be/P7KU6mqdmJ0')
                        }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>Start!!</Text>
                        </TouchableOpacity>
                    </Card>

                    <Card>
                        <Card.Title style={{ fontSize: 20, textDecorationLine: 'underline' }}>Resets and Normalizing</Card.Title>
                        <Text>All the creative assets you need under one subscription. Customize your project by adding unique photos, fonts, graphics, and themes.</Text>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('https://youtu.be/IgFfsZfkd24')
                        }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>Start!!</Text>
                        </TouchableOpacity>
                    </Card>

                    <Card>
                        <Card.Title style={{ fontSize: 20, textDecorationLine: 'underline' }}>Clean Project Structures</Card.Title>
                        <Text>It's considered a best practice to always divide your images, CSS files and JavaScript files into their own folders. In this lesson you'll learn about making sure all of your HTML & CSS projects are well organized and clean.</Text>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('https://youtu.be/g7js1fW4AZw')
                        }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>Start!!</Text>
                        </TouchableOpacity>
                    </Card>
                    <TouchableOpacity style={{ alignSelf: 'center' }}
                        onPress={() => {
                            this.props.navigation.navigate('HTMLTestScreen')
                        }}
                    ><Text style={{ fontSize: 20, textDecorationLine: 'underline' }}>You may attemp the test now!!</Text></TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}