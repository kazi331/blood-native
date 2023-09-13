import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import { colors } from '../common/constants';
import Donations from './Donations';
import Requests from './Requests';



const scenes = SceneMap({
    donations: Donations,
    requests: Requests,
})
export default function ProfileInfo() {

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'donations', title: 'DONATIONS' },
        { key: 'requests', title: 'REQUESTS' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={scenes}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={(props) => <CustomTabBar {...props} />}
        />
    )
}

const CustomTabBar = ({ navigationState, jumpTo }: any) => {
    return (
        <View style={styles.tabContainer}>
            <Pressable style={[styles.tab, navigationState.index === 0 && { backgroundColor: colors.redTransparent }]} onPress={() => jumpTo('donations')} >
                <Text style={{ ...styles.tabText, color: navigationState.index === 0 ? colors.red : 'gray' }}>DONATIONS</Text>
            </Pressable>
            <Pressable style={[styles.tab, navigationState.index === 1 && { backgroundColor: colors.redTransparent }]} onPress={() => jumpTo('requests')} >
                <Text style={{ ...styles.tabText, color: navigationState.index === 1 ? colors.red : 'gray' }}>REQUESTS</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    tab: {
        alignItems: 'center',
        padding: 10,
        width: '50%',
        borderRadius: 5,

    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})