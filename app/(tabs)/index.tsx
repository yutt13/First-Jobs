import bgCoffee from '@/assets/images/gun bg.jpg'
import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgCoffee}
        style={styles.image}
      >
        <Text style={styles.text}>Gun Shop</Text>
      </ImageBackground>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
