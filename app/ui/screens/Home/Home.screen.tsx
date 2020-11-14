import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Gradient} from '../../components/LinearGradient/LinearGradient.component'
import {GoalCounterComponent} from '../../components/GoalCounter/GoalCounter.component'
import {SPACING} from '../../style/spacing'
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
        <View style={{paddingBottom: SPACING.xxl}}>
          <HorizontalScrollBar header={'large horizontal scroll'} size={'large'} />
        </View>
        <View>
          <HorizontalScrollBar header={'small horizontal scroll'} size={'small'} />
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
    paddingHorizontal: SPACING.xxl,
    paddingTop: SPACING.xxl,
    paddingBottom: SPACING.l,
  },
  flatList_spacing: {paddingVertical: SPACING.m, paddingLeft: SPACING.m},
})
