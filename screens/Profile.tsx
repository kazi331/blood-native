
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/common/Header';
import { colors } from '../components/common/constants';
import ProfileCard from '../components/profile/ProfileCard';
import ProfileInfo from '../components/profile/ProfileInfo';

export default function Profile() {
    return (
        <LinearGradient colors={['#fff', colors.grey]} style={{ flex: 1, padding: 10 }} >
            <Header title="Profile" />

            <View style={styles.container}>

                <ProfileCard />
                <ProfileInfo />

            </View>

        </LinearGradient>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 90,
        // backgroundColor: 'orange'
    },
});