import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function HomeGraph() {
    return (
        <View style={{ marginTop: 30 }}>
            <ImageBackground
                source={require('../../assets/images/graph-number.png')}
                resizeMode='contain'
                style={styles.imgBg}
            >
                <Text style={{ color: '#fff', marginBottom: 8, fontSize: 18 }}>14.5k</Text>
            </ImageBackground>
            <Image source={require('../../assets/images/graph-indicator.png')}
                style={styles.indicator}
            />

            <Image source={require('../../assets/images/graph.png')}
                style={{ width: "100%", height: 300, resizeMode: 'stretch' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imgBg: {
        width: "100%",
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginStart: 100
    },
    indicator: {
        width: "70%",
        height: 100,
        marginLeft: -10,
        marginBottom: -100,
        resizeMode: 'cover'
    }
})