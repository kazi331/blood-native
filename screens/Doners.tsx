import React from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/common/Header'

export default function Doners() {
    return (
        <LinearGradient style={{ flex: 1 }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4c669f', '#3b5998', '#192f6a']}>
            <View>
                <Header title="Doners" />
            </View>
        </LinearGradient>
    )
}