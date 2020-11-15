import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {colors} from '../../style/colors'

export const QuickStart = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text>Random activity</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Favorite activities</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text_bold: {
    textAlign: 'center',
    color: colors.yomentoWhite,
    fontFamily: 'HelveticaNeue-Bold',
    fontWeight: 'bold',
  },
})
