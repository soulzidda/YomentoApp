import React from 'react'
import {FlatList, Text, View} from 'react-native'

interface ScrollBarProps {
  header: string
  size?: string
}

export const HorizontalScrollBar = (props: ScrollBarProps) => {
  const {header, size} = props
  return (
    <View>
      <Text>{header}</Text>
      <FlatList data={null} renderItem={null} horizontal />
    </View>
  )
}
