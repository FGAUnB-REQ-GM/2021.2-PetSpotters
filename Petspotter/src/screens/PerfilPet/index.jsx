import React, { useState } from "react";
import { Text, View, TouchableOpacity, FlatList, Dimensions, Image, ImageBackground, ScrollView } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { ContainerView, ProfileLogo, SttsBar } from "../../components"
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
    style={{ width: '100%', height: '100%'}}
    resizeMode='cover'
    source={{uri: item.item.image}}
    />
  }

  const [activeSlide, setActiveSlide] = useState(0)
  
  const paginacao = () => {
    return (
      <Pagination 
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: '#00000000'}}
        dotStyle={{
          width: 15,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#B66C6Cee',
          shadowColor: 'rgba(0, 0, 0, 0.75)',
          shadowOffset: {width: -1, height: 1},
          shadowRadius: 20
        }}
        inactiveDotStyle={{
          width: 15,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.40)',
          shadowColor: 'rgba(0, 0, 0, 0.75)',
          shadowOffset: {width: -1, height: 1},
          shadowRadius: 15
        }}
        inactiveDotScale={0.6}
      />
    )
  }

  return (
    <ContainerView>
      <SttsBar />
      <View style={styles.topBar}>
        <ProfileLogo style={{marginTop: 5, marginBottom: 5}} />
      </View>
      <View style={styles.profileImageView}>
        <Carousel
          layout="stack"
          data={images}
          sliderWidth={width}
          style={{position: 'relative'}}
          itemWidth={width}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveSlide(index)}
          />
        <View style={{position: 'absolute'}}>
          {paginacao()}
        </View>
      </View>
        <View style={styles.petDescriptionView}>
          <Text style={[styles.petDescription, {fontSize: 30}]}>Mel</Text>
          <Text style={[styles.petDescription]}>2 anos</Text>
          <Text style={styles.petDescription}>BullDog</Text>
        </View>
      <ScrollView style={{}}>
        
      </ScrollView>
    </ContainerView>
  )
}