import * as React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Icon } from 'react-native-elements'
import { RFValue } from "react-native-responsive-fontsize";
import firebase from 'firebase'
export default class CustomSideDrawer extends React.Component {

    render() {
        return (
            <View style={{ marginTop: 30 }}>
                <DrawerItems {...this.props} />


                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        width: "100%",
                        height: "100%",
                        marginTop: 450
                    }}
                    onPress={() => {
                        firebase.auth().signOut();
                        return Alert.alert(
                            'Do You Want To Log Out?',
                            '',
                            [
                                {
                                    text: 'OK', onPress: () => {
                                        this.props.navigation.navigate('WelcomeScreen')
                                    }
                                },
                                {
                                    text: 'Cancel', onPress: () => {
                                        this.props.navigation.navigate('Home')
                                    }
                                }
                            ]
                        )

                    }}
                >
                    <Icon
                        name="logout"
                        type="antdesign"
                        size={RFValue(20)}
                        iconStyle={{ paddingLeft: RFValue(10) }}
                    />

                    <Text
                        style={{
                            fontSize: RFValue(15),
                            fontWeight: "bold",
                            marginLeft: RFValue(30),
                        }}
                    >
                        Log Out
            </Text>
                </TouchableOpacity>
            </View>
        )
    }
}