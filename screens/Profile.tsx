import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/common/Header';
import { colors } from '../components/common/constants';
import ProfileCard from '../components/profile/ProfileCard';

export default function Profile() {
    return (
        <LinearGradient colors={['#fff', colors.grey]} style={styles.container} >
            <Header title="Profile" />
            <View style={styles.container}>
                <ProfileCard />
            </View>
        </LinearGradient>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});