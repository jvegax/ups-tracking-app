import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CustomerScreen from '../Screens/CustomerScreen'
import OrderScreen from '../Screens/OrderScreen'
import { useNavigation } from '@react-navigation/native'

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
}

const Tab = createBottomTabNavigator<TabStackParamList>()

const TabNavigator = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  },[])

  return (
    <Tab.Navigator>
      <Tab.Screen name='Customers' component={CustomerScreen} />
      <Tab.Screen name='Orders' component={OrderScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator