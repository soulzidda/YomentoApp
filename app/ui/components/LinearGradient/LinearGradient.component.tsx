import React from 'react'

import LinearGradient from 'react-native-linear-gradient'
import {SafeAreaView, StyleSheet, View} from 'react-native'
import {colors} from '../../style/colors'

interface Props {
  children: any
}

export const Gradient = (props: Props) => {
  const {children} = props
  return (
    <LinearGradient colors={[colors.yamatoNavy, colors.yamatoPurple]} style={styles.linearGradient}>
      <SafeAreaView />
      {children}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    width: '100%',
  },
})
