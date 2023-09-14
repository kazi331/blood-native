import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../common/constants';

export default function Donation() {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', rowGap: 4 }}>
                <Image source={require('../../assets/icons/blood.png')} style={styles.img} />
                <View style={{ width: 1.5, height: 10, backgroundColor: colors.red, borderRadius: 50 }}></View>
                <View style={{ width: 1.5, height: 10, backgroundColor: colors.red, borderRadius: 50 }}></View>
            </View>
            <View>
                <Text style={styles.date}>1 December 2022</Text>
                <Text style={{ ...styles.hospital, color: '#123456' }}>Cumilla Medical Hospital</Text>
                <Text style={{ ...styles.date, fontSize: 17 }}>1 Bag Blood</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingLeft: 10,
        marginVertical: 10,
    },
    img: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor: colors.red
    },
    date: {
        color: colors.dark,
    },
    hospital: {
        fontSize: 20,
        color: colors.dark,
        fontWeight: 'bold'
    }

});