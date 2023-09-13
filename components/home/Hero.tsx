import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../common/constants';
import ActionButtons from './ActionButton';
import HomeGraph from './HomeGraph';
import HomeHeader from './HomeHeader';
import HomeState from './HomeState';

export default function Hero() {
    return (
        <View>
            <ScrollView>
                <HomeHeader />
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

                <HomeState />

                <HomeGraph />

                {/* Action area  */}
                <LinearGradient colors={['#FCFDFE', '#F4F8FB']} style={styles.actionArea}>
                    <ActionButtons color={colors.red} bg={colors.redTransparent} src={require('../../assets/icons/search.png')} state="235K" title="Find A Doner" />
                    <ActionButtons color={colors.yellow} bg={colors.yellowTransparent} src={require('../../assets/icons/notifications.png')} state="340k" title="Blood Request" />
                    <ActionButtons color={colors.blue} bg={colors.blueTransparent} src={require('../../assets/icons/blood.png')} state="Map" title="Blood Bank" />
                    <ActionButtons color={colors.dark} bg={colors.grayTransparent} src={require('../../assets/icons/settings.png')} state="More" title="Others" />
                </LinearGradient>
            </ScrollView >
        </View >
    )
}


const styles = StyleSheet.create({


    actionArea: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        rowGap: 30,
        backgroundColor: colors.grey,
        paddingVertical: 20,
        height: 700,
        marginTop: -120,
    }

});