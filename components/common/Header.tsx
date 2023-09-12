import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { spacing } from './constants';

export default function Header({ title }: { title?: string }) {
    return (
        <View style={styles.headerContainer} >
            <Image style={styles.button} source={require('../../assets/icons/arrow-right.png')} />
            <Text style={{ fontSize: 25, fontWeight: 'bold', }}>{title}</Text>
            <Image style={styles.button} source={require('../../assets/icons/menu-left-alt.png')} />

        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        // backgroundColor: 'lightgray',
        marginTop: spacing.headerTopMargin,
        alignItems: 'center',

    },
    button: {
        width: 20,
        height: 20,
        tintColor: 'gray',
        resizeMode: 'contain',

    }
});