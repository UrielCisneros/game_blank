// import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../AppStyles'

export default function Score({score}) {
  return (
    <View style={styles.score_content}>
        <Text style={styles.scope}>{score}</Text>
    </View>
  )
}
