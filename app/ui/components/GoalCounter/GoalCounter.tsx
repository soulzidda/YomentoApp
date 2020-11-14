import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {colors} from '../../style/colors'

export const GoalCounter = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {borderColor: colors.yamatoWhite, borderWidth: 3},
})
