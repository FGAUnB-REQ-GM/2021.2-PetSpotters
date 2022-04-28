import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { ContainerView, ProfileLogo, SttsBar } from "../../components";
import { useUserContext } from "../../context/ContextUser";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../../firebase";
import styles from "./styles";
import Swiper from "react-native-deck-swiper";
import tw from 'tailwind-react-native-classnames'

export function Match() {
  const navigation = useNavigation();
  const user = useUserContext()
  const [images, setImages] = useState([])
  const imageListRef = ref(storage, `${user.user.email}/`);
  const [current, setCurrent] = useState({})

  useEffect(() => {
    setImages([])
    listAll(imageListRef).then((list) => {
      list.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          // setImages(url);
          setCurrent(
            [
              {
                pic: url,
                petName: user.user.Petnome,
                petAge: user.user.Petidade,
                petPath: user.user.Petendereco,
                petBio: user.user.Petbio,
                petRace: user.user.Petraca
              },
              {
                petAge: 2,
                petName: "dog1"
              },
              {
                petAge: 3,
                petName: "dog2"
              },
              {
                petAge: 4,
                petName: "dog3"
              },
              {
                petAge: 5,
                petName: "dog4"
              },
            ]
          )
        });
      }); 
    });
  }, []);
  
  current ? console.log(current) : null

  const DAMMY_DATA = [
    {
      petAge: 2,
      petName: "dog1"
    },
    {
      petAge: 3,
      petName: "dog2"
    },
    {
      petAge: 4,
      petName: "dog3"
    },
    {
      petAge: 5,
      petName: "dog4"
    },
  ]
  
  const { width } = Dimensions.get("window");



  const renderItem = (item, index) => {
    return (
      <TouchableOpacity activeOpacity={1}>
        <Image
          key={index}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          source={{ uri: item.item }}
        />
      </TouchableOpacity>
    );
  };

  const [activeSlide, setActiveSlide] = useState(0);

  // const paginacao = () => {
  //   return (
  //     <Pagination
  //       dotsLength={images.length}
  //       activeDotIndex={activeSlide}
  //       containerStyle={{ backgroundColor: "#00000000" }}
  //       dotStyle={{
  //         width: 15,
  //         height: 10,
  //         borderRadius: 5,
  //         marginHorizontal: 8,
  //         backgroundColor: "#B66C6Cee",
  //         shadowColor: "rgba(0, 0, 0, 0.75)",
  //         shadowOffset: { width: -1, height: 1 },
  //         shadowRadius: 20,
  //       }}
  //       inactiveDotStyle={{
  //         width: 15,
  //         height: 10,
  //         borderRadius: 5,
  //         marginHorizontal: 8,
  //         backgroundColor: "rgba(255, 255, 255, 0.40)",
  //         shadowColor: "rgba(0, 0, 0, 0.75)",
  //         shadowOffset: { width: -1, height: 1 },
  //         shadowRadius: 15,
  //       }}
  //       inactiveDotScale={0.6}
  //     />
  //   );
  // };

  return (
    <ContainerView>
      <SttsBar />
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.profilePic}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={40} color={"#B66C6Ced"} />
        </TouchableOpacity>
        <View style={{ alignSelf: "center" }}>
          <ProfileLogo style={{ marginTop: 5, marginBottom: 5 }} />
        </View>
      </View>
      {/* <View style={styles.profileImageView}>
        <Carousel
          layout="stack"
          data={images}
          sliderWidth={width}
          style={{ position: "relative" }}
          itemWidth={width}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveSlide(index)}
          enableSnap
        />
        <View style={{ position: "absolute" }}>{paginacao()}</View>
        <View style={styles.petDescriptionView}>
          <Text style={[styles.petDescription, { fontSize: 30 }]}>
            {user.user?.Petnome}
          </Text>
          <Text style={[styles.petDescription]}>{user.user?.Petidade === "1" ? user.user?.Petidade + " ano" : user.user?.Petidade+  " anos"}</Text>
          <Text style={styles.petDescription}>{user.user?.Petraca}</Text>
          <TouchableOpacity style={styles.button}>
            <Icon name="information" size={20} color={"#ffffffdd"} />
          </TouchableOpacity>
        </View>
        <View style={styles.likedislike}>
          <TouchableOpacity style={[styles.avaliatebtn, {borderColor: "#ee3333aa"}]} activeOpacity={0.4}>
            <Icon name="heart-off" size={50} color={"#ee3333ee"} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.avaliatebtn, {borderColor: "#33ff33aa"}]} activeOpacity={0.4}>
            <Icon name="heart" size={50} color={"#33ff33ee"} />
          </TouchableOpacity>
        </View>
      </View> */}
      {current ? 
      <View style={{width: '90%', height: '100%'}}>
        <Swiper
          containerStyle={{backgroundColor: "transparent"}}
          cards={current}
          renderCard={(pet) => (
            <View style={{flex: 1}}>
              <Text>{pet?.petName}</Text>
              {console.log(pet)}
            </View>
          )}
        />
      </View> : null}
      
    </ContainerView>
  );
}
