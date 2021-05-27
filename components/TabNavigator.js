import * as React from 'react' 
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HTMLStart from '../screens/HTMLStart'
import CyberStart from '../screens/CyberStart';
import CyberCourse from '../screens/CyberCourse';
import MyCourses from '../screens/MyCourses';
import WelcomeScreen from '../screens/WelcomeScreen';
import {Image} from 'react-native'

export const TabNavigator=createBottomTabNavigator({
    // Courses:{
    //     screen:Courses
    // }, 
 CyberSecurity:{
     screen:CyberStart
 },
 HTML:{
     screen:HTMLStart
 }

},
{
    defaultNavigationOptions:({navigation})=>({
        tabBarIcon:()=>{
            const routename=navigation.state.routeName;
            if(routename==="HTML"){
                return(
                    <Image source={require('../assets/htmlTab.png')}
                    style={{
                        width:40,height:40
                    }}
                    />

                )
            }
            else if(routename==="CyberSecurity"){
                return(
                    <Image source={{uri:'https://elevenfifty.org/wp-content/uploads/2020/03/cybersecurity_badges_blue1.png'}}
                    style={{
                        width:40,height:40
                    }}
                    />

                )
            }
        }
    })
}
)