import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {ExploreScreen} from '../screens/Explore/Explore.screen'
import {InsightScreen} from '../screens/Insight/Insight.screen'
import {ProfileScreen} from '../screens/Profile/Profile.screen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {HomeScreen} from '../screens/Home/Home.screen'
import {Text} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {colors} from '../style/colors'

export type NavigationStackParams = {
  home: undefined
  tab: undefined
}

export type ExploreStackParams = {
  explore: undefined
}

export type InsightsStackParams = {
  insights: undefined
}

export type ProfileStackParams = {
  profile: undefined
}

export type YomentoTab = {
  home: undefined
  explore: undefined
  insights: undefined
  profile: undefined
}

export function Navigation() {
  const Stack = createStackNavigator<NavigationStackParams>()

  return (
    <Stack.Navigator initialRouteName="tab" headerMode="none">
      <Stack.Screen name="tab" component={YomentoTab} />
    </Stack.Navigator>
  )
}

function YomentoTab() {
  const Tab = createBottomTabNavigator<YomentoTab>()
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeTintColor: colors.yomentoWhite,
        inactiveBackgroundColor: colors.yomentoPurple,
        activeBackgroundColor: colors.yomentoPurple,
      }}>
      <Tab.Screen
        name="home"
        component={NavigationStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => <Entypo name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="explore"
        component={ExploreStack}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color, size}) => <Feather name="layers" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="insights"
        component={InsightStack}
        options={{
          tabBarLabel: 'Insights',
          tabBarIcon: ({color, size}) => <Octicons name="light-bulb" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({color, size}) => <FontAwesome name="user-o" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}

function NavigationStack() {
  const Stack = createStackNavigator<NavigationStackParams>()

  return (
    <Stack.Navigator initialRouteName="home" headerMode="none">
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

function ExploreStack() {
  const Stack = createStackNavigator<ExploreStackParams>()

  return (
    <Stack.Navigator initialRouteName="explore" headerMode="none">
      <Stack.Screen name="explore" component={ExploreScreen} />
    </Stack.Navigator>
  )
}

function InsightStack() {
  const Stack = createStackNavigator<InsightsStackParams>()

  return (
    <Stack.Navigator initialRouteName="insights" headerMode="none">
      <Stack.Screen name="insights" component={InsightScreen} />
    </Stack.Navigator>
  )
}

function ProfileStack() {
  const Stack = createStackNavigator<ProfileStackParams>()

  return (
    <Stack.Navigator initialRouteName="profile" headerMode="none">
      <Stack.Screen name="profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}
