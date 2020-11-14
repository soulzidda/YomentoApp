import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {colors} from '../../style/colors'
import {SPACING} from '../../style/spacing'

export const GoalCounterComponent = () => {
  const sessionsUntilGoal = 3
  const sessionsCompleted = 1
  const sessionsToGo = sessionsUntilGoal - sessionsCompleted
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.count_container}>
          <Text style={styles.count}>{sessionsUntilGoal}</Text>
          <Text style={styles.text}>Weekly</Text>
          <Text style={styles.text}>Goal</Text>
        </View>
        <View style={styles.count_container}>
          <Text style={styles.count}>{sessionsCompleted}</Text>
          <Text style={styles.text}>Completed</Text>
          <Text style={styles.text}>Activities</Text>
        </View>
      </View>
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>
        Complete {sessionsToGo} sessions to reach your goal!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.m,
    paddingBottom: SPACING.s,
  },
  count_container: {width: 100},
  count: {fontSize: 50, textAlign: 'center', color: colors.yomentoWhite},
  text: {textAlign: 'center', color: colors.yomentoWhite},
})
