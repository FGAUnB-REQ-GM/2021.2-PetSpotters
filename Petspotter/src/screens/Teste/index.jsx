import React, { useState } from 'react'
import { View, Image, Text, Button, TouchableOpacity, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
import { ContainerView } from '../../components'

export function Teste() {
  const [resourcePath, setResourcePath] = useState({})

  return(
    <ContainerView>
      <TouchableOpacity onPress={() => {}}>
        <View style={{
          height: 100,
          width: 100,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ImageBackground
            source={require("../../../assets/img/ferrari.jpeg")}
            style={{ width: 100, height: 100}}
            imageStyle={{borderRadius: 15}}
          >
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="camera" size={35} color={"#fff"} style={{
                opacity: 0.6,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 10
              }}></Icon>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </ContainerView>
  )
}