import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, spacing } from '../common/constants';
import ActionButtons from './ActionButton';

export default function Hero() {
    return (
        <View>
            <ScrollView>


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

                {/* graph area  */}

                <View style={{ marginTop: 30 }}>
                    <ImageBackground
                        source={require('../../assets/images/graph-number.png')}
                        resizeMode='contain'
                        style={{ width: "100%", height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 20, marginStart: 100 }}
                    >
                        <Text style={{ color: '#fff', marginBottom: 8, fontSize: 18 }}>14.5k</Text>
                    </ImageBackground>
                    <Image source={require('../../assets/images/graph-indicator.png')}
                        style={{ width: "70%", height: 100, marginLeft: -10, marginBottom: -100, resizeMode: 'cover' }}
                    />

                    <Image source={require('../../assets/images/graph.png')}
                        style={{ width: "100%", height: 300, resizeMode: 'stretch' }}
                    />
                </View>

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
    },
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