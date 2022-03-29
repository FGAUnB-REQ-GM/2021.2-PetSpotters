import React, { useState } from 'react'
import { View, Image, Text, Button, TouchableOpacity, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet'
import { ContainerView } from '../../components'

export function Teste() {
  const [resourcePath, setResourcePath] = useState({})

  bs = React.createRef()
  fall = new Animated.Value()

  const renderInner = () => {
    <Text>Hello</Text>
  }

  const renderHeader = () => {
    <View style={{
      backgroundColor: "#fff",
      shadowColor: "#333",
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
    }}>
      <View style={{alignItems: 'center'}}>
        <View style={{width: 40, height: 8, borderRadius: 4, backgroundColor: "#00000040", marginBottom: 10}}>

        </View>
      </View>
    </View>
  }

  return(
    <ContainerView>
      <BottomSheet 
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <TouchableOpacity onPress={() => {bs.current.snapPoints(0)}}>
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