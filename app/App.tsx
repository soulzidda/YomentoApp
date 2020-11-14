import 'react-native-gesture-handler'
import React from 'react'
import {SafeAreaView, StatusBar, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {colors} from './ui/style/colors'
import {navigationService} from './ui/navigation/Navigation.service'
import {Navigation} from './ui/navigation/Navigation'

export const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.yomentoNavy}} />
      <StatusBar backgroundColor={colors.yomentoNavy} barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: colors.yomentoPurple}}>
        <NavigationContainer ref={navigationRef => (navigationService.navigator = navigationRef)}>
          <Navigation />
        </NavigationContainer>
      </SafeAreaView>
    </>
  )
}
