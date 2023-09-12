import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Profile() {
    return (
        <LinearGradient colors={['#FF78A9', '#DF1B49']} style={styles.container} >
            <View style={styles.container}>
                <Text>Profile</Text>
            </View>
        </LinearGradient>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});