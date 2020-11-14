import React from 'react'
import {ImageBackground, StyleSheet, TouchableWithoutFeedback, View} from 'react-native'
import {Data} from '../../../dummyData/DummyData'
import {spacing} from '../../style/spacing'

interface Props {
  data: Data
  width: number
}

export const ScrollContentCard = (props: Props) => {
  const {data, width} = props

  return (
    <View style={[styles.container, {width: width}]}>
      <TouchableWithoutFeedback>
        <ImageBackground
          source={data.imageUri}
          style={styles.imageContainer}
          imageStyle={styles.border}
        />
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    height: '100%',
    width: '100%',
  },
  border: {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
  },
  container: {
    flex: 1,
    marginRight: spacing.m,
  },
})
