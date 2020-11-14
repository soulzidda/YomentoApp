import React from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'
import {spacing} from '../../style/spacing'
import {colors} from '../../style/colors'

interface ReminderBellProps {
  onPress?: () => void
}

export const ReminderBell = (props: ReminderBellProps) => {
  const {onPress} = props

  return (
    <TouchableOpacity style={styles.container} onPress={() => (onPress ? onPress() : null)}>
      <Entypo
        name="bell"
        size={28}
        style={{padding: spacing.s, color: colors.yomentoBellBlue, transform: [{scaleX: -1}]}}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
    top: 20,
    left: 15,
  },
})
