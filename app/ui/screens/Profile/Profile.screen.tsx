import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Gradient} from '../../components/LinearGradient/LinearGradient.component'
import {colors} from '../../style/colors'

export const ProfileScreen = () => {
  return (
    <Gradient>
      <View style={styles.content_container}>
        <Text style={styles.text}>I am the profile screen</Text>
      </View>
    </Gradient>
  )
}

const styles = StyleSheet.create({
  content_container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {color: colors.yamatoWhite},
})
