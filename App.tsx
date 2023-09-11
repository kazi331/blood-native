import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Navbar from './components/common/Navbar'

const App = () => {
  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  )
}

export default App