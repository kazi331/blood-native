import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../common/constants'

export default function ActionButtons(props: any) {
    return (
        <View style={styles.buttonContainer}>
            <View style={[styles.iconWrapper, { backgroundColor: props.bg }]} >
                <Image source={props.src}
                    style={{ width: 30, height: 30, tintColor: props.color, resizeMode: 'contain' }}
                />
            </View>
            <Text style={{ marginVertical: 18, fontSize: 20, color: '#000' }}>{props.title}</Text>
            <View style={{
                width: 60, height: 30, backgroundColor: colors.button, borderRadius: 20,
                alignItems: 'center', justifyContent: 'center',
            }}>
                <Text style={{ color: '#fff', fontSize: 16 }}>{props.state}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#fff',
        // padding: 20,
        width: 160,
        height: 220,
        borderRadius: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 12,
            height: 4,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1.65,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconWrapper: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})