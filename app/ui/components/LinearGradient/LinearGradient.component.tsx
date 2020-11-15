import React from 'react'

import LinearGradient from 'react-native-linear-gradient'
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native'
import {colors} from '../../style/colors'

interface Props {
  children: any
}

export const Gradient = (props: Props) => {
  const {children} = props
  return (
    <LinearGradient
      colors={[colors.yomentoNavy, colors.yomentoPurple]}
      style={styles.linearGradient}>
      <SafeAreaView />
      <ScrollView alwaysBounceVertical>{children}</ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    width: '100%',
  },
})
