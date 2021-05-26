import * as React from 'react'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, StyleSheet, ToastAndroid, Modal } from 'react-native'
import { Input } from 'react-native-elements/dist/input/Input'
import AppHeader from '../components/AppHeader'
import db from '../config'
import firebase from 'firebase'

export default class TestScreen extends React.Component {

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
            testStatus:'',
            userId:firebase.auth().currentUser.email
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

        if (this.state.a1 === "D") {

            score = score + 1
        }
        if (this.state.a2 === "A") {

            score = score + 1
        }
        if (this.state.a3 === "B") {

            score = score + 1
        }
        if (this.state.a4 === "C") {

            score = score + 1
        }
        if (this.state.a5 === "D") {

            score = score + 1
        }

        ToastAndroid.show("Quiz Completed!", ToastAndroid.SHORT)
        this.setState({ Score: score })
        console.log(this.state.Score)
    }

    updateScore=()=>{
        db.collection('Courses').where('Email','==',this.state.userId)
        .onSnapshot
    }

    render() {
        return (
            <View style={{ marginBottom: 150 }} >
                <AppHeader title="Results" />

                <Modal animationType="fade" visible={this.state.isModalVisible}>
                    <KeyboardAvoidingView>
                        <ScrollView style={{ width: '100%' }}>
                            <View>
                                {this.enterQuest(
                                    " 1. Why would a hacker use a proxy server?",
                                    " A. To create a stronger connection with the target.",
                                    " B. To create a ghost server on the network.",
                                    " C. To obtain a remote access connection.",
                                    " D. To hide malicious activity on the network.",
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
                                    "2. What type of symmetric key algorithm using a streaming cipher to encrypt information?",
                                    " A. RC4",
                                    " B. Blowfish",
                                    " C. SHA",
                                    " D. MD5"
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
                                    " 3. What type of attack uses a fraudulent server with a relay address?",
                                    " A. NTLM",
                                    " B. MITM",
                                    " C. NetBIOS",
                                    " D. SMB",
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
                                    " 4. To hide information inside a picture, what technology is used?",
                                    " A. Rootkits",
                                    " B. Bitmapping",
                                    " C. Steganography",
                                    " D. Image Rendering",
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
                                    " 5. Which of the following is not a typical characteristic of an ethical hacker?",
                                    " A. Excellent knowledge of Windows.",
                                    " B. Understands the process of exploiting network vulnerabilities.",
                                    " C. Patience, persistence and perseverance.",
                                    " D. Has the highest level of security for the organization.",
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
                                    }}>
                                    <Text>Submit</Text>
                                </TouchableOpacity></View>

                        </ScrollView>
                    </KeyboardAvoidingView>
                </Modal>

                <Text>You have scored {this.state.Score}/5</Text>
                {this.state.score>=3?(
                    this.setState({testStatus:"passed"})):
                    (this.setState({testStatus:"failed"}))}
               
                <TouchableOpacity 
                style={{backgroundColor:'black'}}
                onPress={()=>{
                    this.props.navigation.navigate('Courses')
                }}
                >
                    <Text style={{textAlign:'center',color:'white'}}>Go back to Home</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: { fontWeight: 'bold', fontSize: 17, marginTop: 10 },
    optionText: { marginTop: 5 }
})