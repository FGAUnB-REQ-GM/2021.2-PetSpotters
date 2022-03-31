import React, { useState } from "react";
import { Text, View, TouchableOpacity, FlatList, Dimensions, Image, ImageBackground } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { ContainerView, SttsBar } from "../../components"
import styles from "./styles";

export function PerfilPet() {
const fotos = {
  foto1: 'https://pbs.twimg.com/profile_images/1478141668159148033/IOD8SZvx_400x400.jpg',
  foto2: 'https://i.ytimg.com/vi/hPsHAABCbRk/maxresdefault.jpg',
  foto3: 'https://i.pinimg.com/originals/d6/a1/fd/d6a1fdbd79b80339d009aff691f49985.jpg',
  foto4: 'https://i.ytimg.com/vi/A4_Czor6KVY/maxresdefault.jpg',
  foto5: 'https://i.insider.com/5d124f9a9c5101048e440825?width=1000&format=jpeg&auto=webp',
  foto6: 'https://i.ytimg.com/vi/grpIY4FIymk/hqdefault.jpg',
  foto7: 'https://i.pinimg.com/564x/3b/92/5a/3b925aa493a467ca8ba15a4834178a38.jpg',
  foto8: 'https://img.ibxk.com.br/2020/10/01/01115625302155.jpg?w=1040'
}

  const [images, setImages] = useState([
    {id: '1', image: fotos.foto1},
    {id: '2', image: fotos.foto2},
    {id: '3', image: fotos.foto3},
    {id: '4', image: fotos.foto4},
    {id: '5', image: fotos.foto5},
    {id: '6', image: fotos.foto6},
    {id: '7', image: fotos.foto7},
    {id: '8', image: fotos.foto8},
  ])
  const { width } = Dimensions.get('window')
  const spacing = 10
  const thumbSize = 80

  const renderItem = (item, index) => {
    return <Image
      key={index}
      style={{ width: '100%', height: '100%' }}
      resizeMode='contain'
      source={{uri: item.item.image}}
    />
  }

  return (
    <ContainerView>
      <SttsBar />
      <View style={{margin: "5%"}}>
        <Text style={styles.perfilText}>PERFIL DO MEU PET</Text>
      </View>
      <View style={styles.petPics}>
        <Carousel
          layout="default"
          data={images}
          sliderWidth={width}
          itemWidth={width}
          renderItem={renderItem}
        />
      </View>
    </ContainerView>
  )
}