import React from 'react'
import { Alert, Button } from 'react-native'

export default function PrimaryButton() {
    return (
        <Button title="Press me" onPress={() => Alert.alert('Simple Button pressed')} />
    )
}
