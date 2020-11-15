import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {colors} from '../../style/colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {spacing} from '../../style/spacing'

export const QuickStart = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button_container}>
        <FontAwesome name="random" size={24} color={colors.yomentoWhite} />
        <Text style={styles.text}>Random activity</Text>
        <FontAwesome name="arrow-right" size={24} color={colors.yomentoBellBlue} />
      </TouchableOpacity>
      <View style={styles.padding} />
      <TouchableOpacity style={styles.button_container}>
        <FontAwesome name="heart" size={24} color={colors.yomentoRed} />
        <Text style={styles.text}>Favorite activities</Text>
        <FontAwesome name="arrow-right" size={24} color={colors.yomentoBellBlue} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: spacing.s,
  },
  padding: {paddingVertical: spacing.s},
  text: {
    fontSize: 22,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: colors.yomentoWhite,
    fontFamily: 'HelveticaNeue-Bold',
    fontWeight: 'bold',
  },
})
