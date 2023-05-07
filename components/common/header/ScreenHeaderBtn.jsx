import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { TouchableOpacity,Image } from 'react-native'
import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl,dimension,handlepress}) => {


  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlepress}>
      <Image 
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn