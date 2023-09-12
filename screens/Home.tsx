import React from 'react'
import { StyleSheet, View } from 'react-native'

import Hero from '../components/home/Hero'


const Home = () => {
    return (
        <View style={styles.container}>
            <Hero />
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // paddingVertical: 10,
        // backgroundColor: '#F4F8FB',
        backgroundColor: '#fff',
    }
});