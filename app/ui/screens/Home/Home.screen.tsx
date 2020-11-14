import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Gradient} from '../../components/LinearGradient/LinearGradient.component'
import {GoalCounterComponent} from '../../components/GoalCounter/GoalCounter.component'
import {spacing} from '../../style/spacing'
import {ReminderBell} from '../../components/ReminderBell/ReminderBell.component'
import {HorizontalScrollBar} from '../../components/HorizontalScrollBar/HorizontalScrollBar.component'

export const HomeScreen = () => {
  return (
    <Gradient>
      <ReminderBell />
      <View style={styles.goal_container}>
        <GoalCounterComponent />
      </View>
      <View style={styles.flatList_spacing}>
        <View style={styles.padding}>
          <HorizontalScrollBar header={'Small horizontal scroll'} size={'small'} />
        </View>
        <View style={styles.padding}>
          <HorizontalScrollBar header={'Large horizontal scroll'} size={'large'} />
        </View>
      </View>
    </Gradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goal_container: {
    paddingHorizontal: spacing.xxl,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.l,
  },
  padding: {paddingBottom: spacing.xxl},
  flatList_spacing: {paddingVertical: spacing.m, paddingHorizontal: spacing.m},
})
