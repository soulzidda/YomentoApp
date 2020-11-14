import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Gradient} from '../../components/LinearGradient/LinearGradient.component'
import {GoalCounter} from '../../components/GoalCounter/GoalCounter'
import {HorizontalScrollBar} from '../../components/HorizontalScrollBar/HorizontalScrollBar'

export const HomeScreen = () => {
  return (
    <Gradient>
      <View>
        <GoalCounter />
      </View>

      <HorizontalScrollBar header={'Small horizontal scroll'} />
      <HorizontalScrollBar header={'large horizontal scroll'} />
    </Gradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
