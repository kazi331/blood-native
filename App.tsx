import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' animated={true} />
      <Navbar />
    </NavigationContainer>
  )
}

export default App