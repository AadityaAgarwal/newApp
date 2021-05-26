import * as React from 'react'
import { Text, View,Image } from 'react-native'
import {Card} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AppHeader from '../components/AppHeader'
import firebase from 'firebase'
import db from '../config'

export default class CyberStart extends React.Component{

    constructor(){
        super()
        this.state={
            userId: firebase.auth().currentUser.email,
            docId:'',
        }
    }

    getField=()=>{

        db.collection('Courses').where('Email','==',this.state.userId)
        .onSnapshot((snapshot)=>{
            var docId=snapshot.docs.map(doc=>{doc.id})
            this.setState({docId:docId})
        })
    }

    updateField=()=>{
        db.collection('Courses').doc(this.state.docId).update({
            'CyberStatus':'started'
        })
    }

    componentDidMount(){
        this.getField()
        console.log(this.state.docId,this.state.userId)
    }
    render(){
        return(
            <View>
                <AppHeader title="Courses" />
                <View>
                    <Card>
                        <Card.Title style={{fontSize:20,textDecorationLine:'underline'}}>Cyber Security</Card.Title>
                            <Image 
                           source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2p3hioBJ57a4gAjCM-Dgzvd6hKSlAKT-A0w&usqp=CAU'}}
                            style={{width:300,height:200,marginTop:10}}
                            />
                            <Card.Title>Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks and technologies.</Card.Title>
                   <TouchableOpacity onPress={()=>{
                       this.props.navigation.navigate('CyberCourse')
                    // this.updateField() 
                    }
                       }>
                       <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>Start Course!</Text>
                   </TouchableOpacity>
                    </Card>
                </View>
            </View>
        )
    }
}