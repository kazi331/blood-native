import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, spacing } from '../common/constants';

export default function Hero() {
    return (
        <View>
            {/* header area  */}
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
            {/* slogan area */}
            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text
                    style={{ color: colors.dark, fontSize: 25, textTransform: 'uppercase', fontWeight: '700' }}>
                    Give The Gift Of Life
                </Text>
                <Text>
                    <Text style={{ color: colors.red, fontSize: 35, fontWeight: '600' }}>Donate</Text>
                    <Text style={{ color: colors.primary, fontSize: 45, fontWeight: '900' }}> Blood</Text>
                </Text>
            </View>
            {/* statistics area */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 30 }}>
                <LinearGradient colors={colors.gradient} style={styles.card}>
                    <Text style={{ color: '#fff', fontSize: 55, fontWeight: '600' }}>157</Text>
                    <Text style={{ color: '#fff', fontSize: 17, marginBottom: 10 }}>New Blood Requested</Text>
                </LinearGradient>
                <View style={{
                    ...styles.card, marginLeft: 30, backgroundColor: '#E8EFF3',
                }}>
                    <Text style={{ fontSize: 55, fontWeight: '600', color: colors.dark }}>157</Text>
                    <Text style={{ fontSize: 17, marginBottom: 10, color: colors.dark }}>New Blood Requested</Text>
                </View>
            </View>
            <Text style={{ textAlign: 'center', fontSize: 16 }}>Each Donations can help save up to 3 lives!</Text>

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
    card: {
        width: 140,
        height: 140,
        borderRadius: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }

});