import * as React from 'react'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, StyleSheet, ToastAndroid, Modal } from 'react-native'
import { Input } from 'react-native-elements/dist/input/Input'
import AppHeader from '../components/AppHeader'
import db from '../config'
import firebase from 'firebase'

export default class HTMLTestScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            a1: '',
            a2: '',
            a3: '',
            a4: '',
            a5: '',
            Score: 1,
            isModalVisible: true,
            testStatus: '',
            userId: firebase.auth().currentUser.email
        }
    }
    enterQuest = (q, o1, o2, o3, o4) => {
        return (

            <View>
                <Text style={styles.text}>{q}</Text>
                <Text style={styles.optionText}>{o1}</Text>
                <Text style={styles.optionText}>{o2} </Text>
                <Text style={styles.optionText}>{o3} </Text>
                <Text style={styles.optionText}>{o4} </Text>
            </View>

        )
    }

    getScore = () => {
        var score = 0

        if (this.state.a1 === "B") {

            score = score + 1
        }
        if (this.state.a2 === "C") {

            score = score + 1
        }
        if (this.state.a3 === "B") {

            score = score + 1
        }
        if (this.state.a4 === "B") {

            score = score + 1
        }
        if (this.state.a5 === "D") {

            score = score + 1
        }

        ToastAndroid.show("Quiz Completed!", ToastAndroid.SHORT)
        this.setState({ Score: score })
       // console.log(this.state.Score)
    }

    // updateScore = () => {
    //     db.collection('Courses').where('Email', '==', this.state.userId)
    //         .onSnapshot
    // }

    render() {
        return (
            <View style={{ marginBottom: 150 }}>
                <AppHeader title="Results" />
                <Modal animationType="fade" visible={this.state.isModalVisible}>
                    <KeyboardAvoidingView>
                        <ScrollView style={{ width: '100%' }}>
                            <View>
                                {this.enterQuest(
                                   " 1. HTML is what type of language ?",
                                   " A. Scripting Language",
                                   " B. Markup Language.",
                                   " C. Programming Language",
                                   " D. Network Protocol",
                                )}
                                <Input
                                    placeholder="Input the correct option name. Eg: A"
                                    onChangeText={(text) => {
                                        this.setState({ a1: text })

                                    }}
                                    value={this.state.a1}
                                />
                            </View>
                            <View>
                                {this.enterQuest(
                                     "2. What does HTML uses",
                                     " A. User defined tags",
                                     " B. Pre-specified tags",
                                     " C. Fixed tags defined by the language",
                                     " D. Tags only for linking"
                                )}
                                <Input
                                    placeholder="Input the correct option name. Eg: A"
                                    onChangeText={(text) => {
                                        this.setState({ a2: text })

                                    }}
                                    value={this.state.a2}
                                />
                            </View>
                            <View>
                                {this.enterQuest(
                                    
                                    " 3. Fundamental HTML Block is known as __.",
                                    " A. HTML Body",
                                    " B. HTML Tag",
                                    " C. HTML Attribute",
                                    " D. HTML Element",
                                )}
                                <Input
                                    placeholder="Input the correct option name. Eg: A"
                                    onChangeText={(text) => {
                                        this.setState({ a3: text })

                                    }}
                                    value={this.state.a3}
                                />
                            </View>

                            <View>
                                {this.enterQuest(
                                    " 4. Apart from <b> tag, what other tag makes text bold ?",
                                    " A. <fat>",
                                    " B. <strong>",
                                    " C. <black>",
                                    " D. <emp>",
                                )}
                                <Input
                                    placeholder="Input the correct option name. Eg: A"
                                    onChangeText={(text) => {
                                        this.setState({ a4: text })

                                    }}
                                    value={this.state.a4}
                                />
                            </View>

                            <View>
                                {this.enterQuest(
                                    " 5. Who is Known as the father of World Wide Web (WWW)?",
                                    " A. Robert Cailliau",
                                    " B. Tim Thompson",
                                    " C. Charles Darwin",
                                    " D. Tim Berners-Lee",
                                )}
                                <Input
                                    placeholder="Input the correct option name. Eg: A"
                                    onChangeText={(text) => {
                                        this.setState({ a5: text })

                                    }}
                                    value={this.state.a5}
                                />
                            </View>

                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.getScore()
                                        this.setState({ isModalVisible: false })
                                    }}
                                    style={{alignSelf:'center'}}
                                    >
                                    <Text>Submit</Text>
                                </TouchableOpacity></View>

                        </ScrollView>
                    </KeyboardAvoidingView>
                </Modal>

                {this.state.Score>=3?(
                   <View>
                       <Text style={{textAlign:'center',color:'black',fontSize:20}}>You have cleared the test</Text>
                       <Text style={{color:'orange',fontSize:20,textAlign:'center'}} >You have scored {this.state.Score}/5</Text>
                       <TouchableOpacity 
                style={{backgroundColor: 'black',width:100,alignSelf:'center',marginTop:50,borderRadius:20 }}
                onPress={()=>{
                    this.props.navigation.navigate('Courses')
                }}
                >
                    <Text style={{textAlign:'center',color:'white'}}>Go back to Home</Text>
                </TouchableOpacity>
                   </View>
                   
               ):(
                   <View>
                       <Text style={{textAlign:'center',color:'black',fontSize:20}}>Please Redo the test</Text>
                       <Text style={{color:'orange',fontSize:20,textAlign:'center'}} >You have scored {this.state.Score}/5</Text>
                       <TouchableOpacity 
                style={{backgroundColor: 'black',width:100,alignSelf:'center',marginTop:50,borderRadius:20 }}
                onPress={()=>{
                   this.setState({isModalVisible:true})
                }}
                >
                    <Text style={{textAlign:'center',color:'white'}}>Redo</Text>
                </TouchableOpacity>
                   </View>
               )}

               

            </View>
        )
    }
}
const styles = StyleSheet.create({
    text: { fontWeight: 'bold', fontSize: 17, marginTop: 10 },
    optionText: { marginTop: 5 }
})