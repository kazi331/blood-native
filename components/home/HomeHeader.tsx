import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { spacing } from '../common/constants';

export default function HomeHeader() {
    return (
        <View style={styles.headerContainer} >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    style={{ width: 30, height: 30, resizeMode: 'contain', tintColor: '#FD3C69' }}
                    source={require('../../assets/icons/location.png')}
                />
                <Text style={{ fontSize: 20, marginLeft: 10, color: '#FD3C69' }}>Cumilla</Text>
            </View>
            <Text style={{ fontSize: 25, fontWeight: 'bold', }}></Text>
            <Image style={{
                width: 20, height: 20, tintColor: 'gray', resizeMode: 'contain',
            }} source={require('../../assets/icons/menu-left-alt.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        paddingHorizontal: 20,
        marginTop: spacing.headerTopMargin,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});