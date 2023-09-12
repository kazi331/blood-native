import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function TabIcon({ focused, icon, style }: { focused: boolean, icon: any, style?: any }) {
    return (
        <View style={{ alignItems: "center", ...style }}>
            <Image
                source={icon}
                style={{ height: 30, width: 30, resizeMode: 'contain', tintColor: focused ? '#FF78A9' : '#464A57' }}
            />
            <View style={[styles.iconDot, { display: focused ? "flex" : "none" }]}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    iconDot: {
        backgroundColor: '#FF78A9',
        width: 6,
        height: 6,
        marginTop: 5,
        borderRadius: 5,
    }
})