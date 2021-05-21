import * as React from 'react'
import {View,Text, Alert, ScrollView,Linking} from 'react-native'
import {Card,Icon,Header} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AppHeader from '../components/AppHeader'
import db from '../config'
import firebase from 'firebase'

export default class CyberCourse extends React.Component{
    constructor(){
        super()
        this.state={
            secondVisible:false,
            thirdVisible:false,
            fourthVisible:false,
            fifthVisible:false,
            sixthVisible:false,
            userId:firebase.auth().currentUser.email,
            visibility:1,
        }
    }
    addVisible=()=>{
        db.collection('NewUsers').where('Email','==',this.state.userId).update({
            CyberVisible:firebase.firestore.FieldValue.increment(1)
        })
    }

    fetchVisible=()=>{
        db.collection('NewUsers').where('Email','==',this.state.userId).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                this.setState({
                    visibility:doc.data().CyberVisible,
                })
            })
        })
    }

    componentDidMount(){
        this.fetchVisible()
    }
    render(){
        return(
            <View style={{flex:1,marginBottom:20}}>
                <Header 
                leftComponent={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.navigate('Courses')}/>}
            centerComponent={{ text: "Cyber Security", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
            backgroundColor = "#eaf8fe"
            />
                <ScrollView  style={{ width: '100%' }}>
              <Card>
                  <Card.Title style={{fontSize:20,textDecorationLine:'underline'}}>Secure Way Of Using SmartPhone and Security on Social Media</Card.Title>
                  <Text>Use strong passwords/biometrics. Strong passwords coupled with biometric features, such as fingerprint authenticators, make unauthorized access nearly impossible.</Text>
                  <TouchableOpacity onPress={()=>{
                      Linking.openURL('https://youtu.be/wyhCX2VyBwM')  
                   this.addVisible()
                  }}>
                      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,marginTop:10}}>Start!!</Text>
                  </TouchableOpacity>
              </Card>

              <Card>
                  <Card.Title style={{fontSize:20,textDecorationLine:'underline'}}>Don't fall for Scams, Protecting your online reputation</Card.Title>
                  <Text>Do not open suspicious texts, pop-up windows or click on links or attachments in emails – delete them: If unsure, verify the identity of the contact through an independent source such as a phone book or online search.</Text>
                  <TouchableOpacity onPress={()=>{
                    
                    if(this.state.visibility===2){
                        this.addVisible() 
                    Linking.openURL('https://youtu.be/3vNzjwQ_-x0')
                }
                    else{Alert.alert('Complete the previous video first')}

                 
                  }}>
                      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,marginTop:10}}>Start!!</Text>
                  </TouchableOpacity>
              </Card>
             
              <Card>
                  <Card.Title style={{fontSize:20,textDecorationLine:'underline'}}>Browse Safely, Responsible Behaviour and Protection of online account</Card.Title>
                  <Text>Potential employers or customers don't need to know your personal relationship status or your home address. They do need to know about your expertise and professional background, and how to get in touch with you. You wouldn't hand purely personal information out to strangers individually—don't hand it out to millions of people online.</Text>
                  <TouchableOpacity onPress={()=>{
                     
                    if(this.state.visibility===3){ this.addVisible() 
                    Linking.openURL(' https://youtu.be/iS94Tayb3Rs')
                    }
                    else{Alert.alert('Complete the previous video first')}

                  
                  }}>
                      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,marginTop:10}}>Start!!</Text>
                  </TouchableOpacity>
              </Card>

              <Card>
                  <Card.Title style={{fontSize:20,textDecorationLine:'underline'}}>Protecting Privacy in Cyber Space </Card.Title>
                  <Text>The term 'right to privacy' could be taken to mean an individual's right to be free from intrusion or interference by others. Cyber space means a non-physical terrain created by computers. In reality, it turns out that there is a serious threat of infringement of privacy of an individual in the cyber space.</Text>
                  <TouchableOpacity onPress={()=>{
                    //  
                    if(this.state.visibility===4){ this.addVisible() 
                    Linking.openURL('https://youtu.be/oTKDMiDPHvA')
                    }
                    else{Alert.alert('Complete the previous video first')}

                 
                  }}>
                      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,marginTop:10}}>Start!!</Text>
                  </TouchableOpacity>
              </Card>

              <Card>
                  <Card.Title style={{fontSize:20,textDecorationLine:'underline'}}>Cyber Parenting </Card.Title>
                  <Text>Cyber parenting is for any parent who has kids that use smartphones and computers. One mistake that many parents make is that they trust their children so much that they feel that they are safe on their own.</Text>
                  <TouchableOpacity onPress={()=>{
                      
                    if(this.state.visibility===5){ this.addVisible()
                    Linking.openURL('https://youtu.be/Hul3QsGOJy4')
                    }
                    else{Alert.alert('Complete the previous video first')}

                 
                  }}>
                      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,marginTop:10}}>Start!!</Text>
                  </TouchableOpacity>
              </Card>

              <Card>
                  <Card.Title style={{fontSize:20,textDecorationLine:'underline'}}>Facebook Safety and Security</Card.Title>
                  <Text>Our recent social networking poll also asked computer users which social network they felt posed the biggest security risk. Facebook is clearly seen as the biggest risk with 81% of the votes, a significant rise from the 60% who felt Facebook was the riskiest when we first asked the question a year ago.</Text>
                  <TouchableOpacity onPress={()=>{
                    
                    if(this.state.visibility===6){ this.addVisible() 
                    Linking.openURL('https://youtu.be/Hul3QsGOJy4')
                    }
                    else{Alert.alert('Complete the previous video first')}

                 
                  }}>
                      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,marginTop:10}}>Start!!</Text>
                  </TouchableOpacity>
              </Card>
              
              <Card.Title style={{fontSize:20,textDecorationLine:'underline'}}> You may attemp the test now!!</Card.Title>
              {/* <Text></Text> */}
              </ScrollView>
            </View>
        )
    }
}