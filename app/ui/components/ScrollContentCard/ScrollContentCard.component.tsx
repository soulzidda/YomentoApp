import React from 'react'
import {
  ImageBackground,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import {Data} from '../../../dummyData/DummyData'
import {spacing} from '../../style/spacing'
import {colors} from '../../style/colors'

interface Props {
  data: Data | any
  size: 'small' | 'large' | 'x-large'
  style?: StyleProp<ViewStyle>
}

export const ScrollContentCard = (props: Props) => {
  const {data, size, style} = props
  let width
  let height

  if (size === 'small') {
    width = 150
    height = 120
  } else if (size === 'large') {
    width = 300
    height = 220
  } else {
    width = 350
    height = 220
  }

  return (
    <View style={[styles.container, {width: width, height: height}, style]}>
      <TouchableOpacity>
        <ImageBackground
          source={data.imageUri}
          style={styles.imageContainer}
          imageStyle={styles.border}>
          <View style={{height: '100%', justifyContent: 'center'}}>
            <View style={{alignItems: 'flex-end'}}>
              {size !== 'x-large' && (
                <View
                  style={{
                    backgroundColor: colors.yomentoGray,
                    width: 60,
                    marginBottom: spacing.s,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: colors.yomentoWhite,
                      fontFamily: 'HelveticaNeue-LightItalic',
                    }}>
                    Action
                  </Text>
                </View>
              )}
            </View>
            {size === 'small' ? (
              <Text style={[styles.text, {fontSize: 20}]}>{data.description}</Text>
            ) : (
              <Text style={styles.text}>{data.description}</Text>
            )}
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  border: {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
  },

  container: {
    flex: 1,
    marginRight: spacing.m,
  },
  imageContainer: {
    height: '100%',
    width: '100%',
  },
  text: {
    alignContent: 'center',
    textAlign: 'left',
    paddingHorizontal: spacing.m,
    justifyContent: 'center',
    fontSize: 30,
    color: colors.yomentoWhite,
    marginBottom: spacing.xl,
    fontFamily: 'HelveticaNeue-Bold',
    fontWeight: 'bold',
  },
})
