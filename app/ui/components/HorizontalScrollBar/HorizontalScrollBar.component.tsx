import React from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
import {ScrollContentCard} from '../ScrollContentCard/ScrollContentCard.component'
import {colors} from '../../style/colors'
import {spacing} from '../../style/spacing'

import {DataSetOne, DataSetTwo} from '../../../dummyData/DummyData'

interface ScrollBarProps {
  header: string
  size: 'small' | 'large'
}

export const HorizontalScrollBar = (props: ScrollBarProps) => {
  const {header, size} = props
  let width: number
  let height: number
  let data

  if (size === 'small') {
    width = 150
    height = 120
    data = DataSetTwo
  } else {
    width = 300
    height = 220
    data = DataSetOne
  }

  return (
    <View style={{flexDirection: 'column'}}>
      <Text style={styles.header}>{header}</Text>
      <FlatList
        contentContainerStyle={{height: height}}
        data={data}
        keyExtractor={item => item.id}
        horizontal
        alwaysBounceHorizontal
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
        renderItem={({item: data}) => <ScrollContentCard width={width} data={data} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    color: colors.yomentoWhite,
    paddingBottom: spacing.s,
    fontFamily: 'HelveticaNeue-Bold',
    fontWeight: 'bold',
    fontSize: 20,
  },
})
