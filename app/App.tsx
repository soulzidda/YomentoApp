import 'react-native-gesture-handler'
import React from 'react'
import {StatusBar} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {NavigationContainer} from '@react-navigation/native'
import {colors} from './ui/style/colors'
import {navigationService} from './ui/navigation/Navigation.service'
import {Navigation} from './ui/navigation/Navigation'

export const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      <NavigationContainer ref={navigationRef => (navigationService.navigator = navigationRef)}>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
