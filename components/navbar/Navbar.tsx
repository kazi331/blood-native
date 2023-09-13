import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Doners from '../../screens/Doners';
import Home from '../../screens/Home';
import Notifications from '../../screens/Notifications';
import Profile from '../../screens/Profile';
import Settings from '../../screens/Settings';
import CustomTabButton from './CustomTabButton';
import TabIcon from './TabIcon';


export default function Navbar() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName='Home'
            id='navbar'
            // backBehavior='initialRoute'
            screenOptions={{

                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: [styles.tabBarStyle, styles.shadow],
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
                tabBarHideOnKeyboard: true,

            }}
        >
            <Tab.Screen
                name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={require('../../assets/icons/home.png')} />,
                    tabBarActiveTintColor: '#55aacc',

                }}
            />
            <Tab.Screen
                name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={require('../../assets/icons/profile.png')} />,
                }}
            />
            <Tab.Screen
                name="Doners" component={Doners}
                options={{
                    tabBarIcon: ({ focused }) => <Image
                        source={require('../../assets/icons/blood.png')}
                        style={{ height: 30, width: 30, resizeMode: 'contain', tintColor: '#fff' }}
                    />
                    ,
                    tabBarButton: (props) => <CustomTabButton  {...props} />,

                }}
            />
            <Tab.Screen
                name="Settings" component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={require('../../assets/icons/settings.png')} />,
                }}
            />
            <Tab.Screen
                name="Notifications" component={Notifications}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={require('../../assets/icons/notifications.png')} />,
                    tabBarBadge: 3,

                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 12,
        left: 15,
        right: 15,
        borderRadius: 15,
        height: 80,
    },


    shadow: {
        elevation: 4,
        shadowColor: 'gray',
        shadowOffset: {
            width: 3,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 3.5,
    }



})