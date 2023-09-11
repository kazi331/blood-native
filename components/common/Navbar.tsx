import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import Doners from '../../screens/Doners';
import Home from '../../screens/Home';
import Notifications from '../../screens/Notifications';
import Profile from '../../screens/Profile';
import Settings from '../../screens/Settings';
import TabIcon from './TabIcon';


const CustomButton = ({ onPress, children }: { onPress: any, children: React.ReactNode }) => {
    return <Pressable
        onPress={onPress}
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            // shadow 


        }}
    >
        <View style={{
            width: 60, height: 60,
            borderRadius: 15,
            shadowColor: '#7F5DF0',
            shadowOffset: {
                width: 0,
                height: 10,
            },

            shadowOpacity: 0.5,
            shadowRadius: 3.5,
            elevation: 3,

            backgroundColor: '#F04C7B',
        }}>
            {children}
        </View>
    </Pressable>
}

export default function Navbar() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName='Doners'
            id='navbar'
            screenOptions={{
                // headerShown: false,
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
                    tabBarIcon: ({ focused }) => <View >
                        <Image
                            source={require('../../assets/icons/blood.png')}
                            style={{ height: 30, width: 30, resizeMode: 'contain', tintColor: '#fff' }}
                        />
                    </View>,
                    tabBarButton: (props) => <CustomButton onPress={() => console.log("console")} {...props} />,
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
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 15,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,

    },

    activeBG: {

        backgroundColor: '#DF1B49',
        backgroundImage: 'linear-gradient(133.87deg, #FF78A9 2.26 %, #DF1B49 106.25 %)',

    },
    donerTab: {
        height: 30,
        width: 30,
        marginTop: -30,
        resizeMode: 'contain',
    },
    shadow: {
        elevation: 1,
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0,
        shadowRadius: 3.5,
    }



})