import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../common/constants';


export default function ProfileCard() {
    return (
        <View>
            <ImageBackground source={require('../../assets/images/user2.jpg')} style={styles.profileImage} >
                <LinearGradient colors={['transparent', colors.profileShade]} style={styles.profileContainer}>
                    <View style={{ marginTop: '40%' }}>
                        <Text style={styles.name}>Kazi Shariful Islam</Text>
                        <Text style={styles.state}>Beginer Doner</Text>
                        <Pressable style={styles.edit}>
                            <Text style={{ color: '#fff' }}>Edit</Text>
                        </Pressable>
                    </View>
                </LinearGradient>
            </ImageBackground>
            <ImageBackground
                source={require('../../assets/icons/blood2.png')}
                style={styles.bloodIcon}>
                <Text style={{ fontSize: 25, color: '#fff', marginTop: 10, fontWeight: 'bold' }}>A+</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

    profileImage: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        // borderRadius: 120,
        borderWidth: 0,
        borderColor: colors.primary,
        borderRadius: 25,
        overflow: 'hidden',
    },
    profileContainer: {
        // backgroundColor: colors.profileShade,
        padding: 10,
        height: '100%'
    },
    name: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'

    },
    state: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 10,
    },
    edit: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 10,
        borderRadius: 5,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,

    },
    bloodIcon: {
        width: 90,
        height: 90,
        resizeMode: 'containe',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -35,
        right: 20,

    }
})