import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home page</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, consequuntur. Dignissimos modi cupiditate temporibus iste necessitatibus, reprehenderit distinctio praesentium officia!</Text>
            <TextInput style={{ padding: 12 }} placeholder='Enter your name' />
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});