import React from 'react'
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native'

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />

      <View>
        <FlatList data={null} renderItem={null} horizontal />
      </View>
      <View>
        <FlatList horizontal data={null} renderItem={null} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
