import { View, Text } from 'react-native'
import React, { FC } from 'react'

type Props = {
    name: string
    email: string
    userId: string
}

const CustomerCard: FC<Props> = ({ }) => {
  return (
    <View>
      <Text>CustomerCard</Text>
    </View>
  )
}

export default CustomerCard