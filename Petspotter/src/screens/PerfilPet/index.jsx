import React, { useState } from "react";
import { Text, View, TouchableOpacity, FlatList, Dimensions, Image, ImageBackground, ScrollView } from "react-native";
import Carousel from 'react-native-snap-carousel'
import { ContainerView, SttsBar } from "../../components"
import styles from "./styles";

export function PerfilPet() {
const fotos = {
  foto1: 'https://images.wallpapersden.com/image/download/husky-dog-muzzle_aWtnapSZmpqtpaSklGZlbWWtZ2llZQ.jpg',
  foto2: 'https://mfiles.alphacoders.com/885/885461.jpg',
  foto3: 'https://mfiles.alphacoders.com/936/thumb-1920-936778.jpg',
  foto4: 'https://images.wallpapersden.com/image/download/nebula_am5sZ2qUmZqaraWkpJRmZW1lrWdpZWU.jpg',
  foto5: 'https://cdn.wallpapersafari.com/38/84/dmy3p2.jpg',
  foto6: 'https://wallpaperaccess.com/full/1139878.jpg',
  foto7: 'https://cdn.wallpapersafari.com/83/78/K0ZSkI.jpg',
  foto8: 'https://wallpapercave.com/wp/wp5549771.jpg'
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

  const renderItem = (item, index) => {
    return <Image
      key={index}
      style={{ width: '100%', height: '100%'
    }}
      resizeMode='contain'
      source={{uri: item.item.image}}
    />
  }

  return (
    <ContainerView>
      <SttsBar />
      <View style={styles.profileImageView}>
        <Carousel
          layout="default"
          data={images}
          sliderWidth={width}
          itemWidth={width}
          renderItem={renderItem}
          style={{position:'relative'}}
        />
        <View style={styles.petDescriptionView}>
          <Text style={styles.petDescription}>Mel</Text>
          <Text style={styles.petDescription}>Fêmea</Text>
          <Text style={styles.petDescription}>BullDog</Text>
        </View>
      </View>
      <ScrollView style={{}}>
        
      </ScrollView>
    </ContainerView>
  )
}