import React from 'react'
import { FlatList, View } from 'react-native'
import Donation from './Donation'

export default function Donations() {
    return (
        <View style={{ rowGap: 16 }}>
            <FlatList
                data={[{}, {}, {}, {}, {}, {},]}
                renderItem={({ item }) => <Donation />}
            // keyExtractor={item => item.id}

            />
            <Donation />
            <Donation />
            <Donation />
            <Donation />
            <Donation />
        </View>
    )
}