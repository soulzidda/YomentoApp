import React from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'
import {SPACING} from '../../style/spacing'
import {colors} from '../../style/colors'

interface ReminderBellProps {
  onPress?: () => void
}

export const ReminderBell = (props: ReminderBellProps) => {
  const {onPress} = props

  return (
    <TouchableOpacity style={styles.container} onPress={() => (onPress ? onPress() : null)}>
      <Entypo name="bell" size={28} style={{padding: SPACING.s, color: colors.yomentoBellBlue}} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
    top: 50,
    left: 15,
  },
})
