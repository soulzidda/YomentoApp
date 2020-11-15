import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Gradient} from '../../components/LinearGradient/LinearGradient.component'
import {GoalCounterComponent} from '../../components/GoalCounter/GoalCounter.component'
import {spacing} from '../../style/spacing'
import {ReminderBell} from '../../components/ReminderBell/ReminderBell.component'
import {HorizontalScrollBar} from '../../components/HorizontalScrollBar/HorizontalScrollBar.component'
import {ScrollContentCard} from '../../components/ScrollContentCard/ScrollContentCard.component'
import {ReflectData} from '../../../dummyData/DummyData'
import {colors} from '../../style/colors'
import {QuickStart} from '../../components/QuickStart/QuickStart.component'

export const HomeScreen = () => {
  return (
    <Gradient>
      <ReminderBell />
      <View style={styles.goal_container}>
        <GoalCounterComponent />
      </View>
      <View style={styles.flatList_spacing}>
        <View style={styles.padding}>
          <HorizontalScrollBar header={'Inspirational quotes'} size={'small'} />
        </View>
        <View style={styles.padding}>
          <HorizontalScrollBar header={'Daily activities'} size={'large'} />
        </View>
      </View>
      <View style={styles.quick_reflection_padding}>
        <QuickStart />
      </View>
      <View style={styles.quick_reflection_padding}>
        <Text style={styles.header}>Weekly Reflection</Text>
        <ScrollContentCard data={ReflectData} size={'x-large'} />
      </View>
    </Gradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList_spacing: {paddingVertical: spacing.m, paddingHorizontal: spacing.m},
  goal_container: {
    paddingHorizontal: spacing.xxl,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.l,
  },
  header: {
    color: colors.yomentoWhite,
    paddingBottom: spacing.s,
    fontFamily: 'HelveticaNeue-Bold',
    fontWeight: 'bold',
    fontSize: 20,
  },
  padding: {paddingBottom: spacing.xxl},
  quick_reflection_padding: {paddingBottom: spacing.xxl, paddingHorizontal: spacing.m},
})
