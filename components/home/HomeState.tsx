import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../common/constants';
export default function HomeState() {
    return (
        <View>

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
    card: {
        width: 140,
        height: 140,
        borderRadius: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})