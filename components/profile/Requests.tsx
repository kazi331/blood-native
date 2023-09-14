import React from 'react'
import { Text, View } from 'react-native'
import { colors } from '../common/constants'

export default function Requests() {
    return (
        <View style={{ alignItems: 'center', }}>
            <Text style={{ color: colors.dark, fontSize: 20 }}>No Requests Found</Text>
        </View>
    )
}