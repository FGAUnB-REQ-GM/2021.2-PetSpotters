import React, { useState, useEffect, useRef } from "react";
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
import { Entypo } from "@expo/vector-icons";

export function Match() {
  const navigation = useNavigation();
  const user = useUserContext()
  const imageListRef = ref(storage, `${user.user.email}/`);
  const [current, setCurrent] = useState({})
  const swipeRef = useRef(null)


  useEffect(() => {
    listAll(imageListRef).then((list) => {
      list.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
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
            ]
          )
        });
      }); 
    });
  }, []);
  
  current ? console.log(current) : null
  
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
      
      <View style={{width: "100%", height: "100%"}}>
        <Swiper
          ref={swipeRef}
          containerStyle={{backgroundColor: "transparent"}}
          cards={current}
          stackSize={3}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          onSwipedLeft={() => console.log("left")}
          onSwipedRight={() => console.log("right")}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red"
                }
              }
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "#4DED30"
                }
              }
            }
          }}
          renderCard={(card) => (
            <View style={{position: "relative", height: "75%", backgroundColor: "white", borderRadius: 10}}>
              <Image 
                source={{uri: card?.pic}}
                style={{position: "absolute", top: 0, width: "100%", height: "100%", borderRadius: 10}}
              />

              <View style={[styles.infoMotherView, styles.cardShadow]}>
                <View>
                  <Text style={{fontSize: 23, fontWeight: "bold"}}>{card?.petName}</Text>
                  <Text>{card?.petRace}</Text>
                </View>
                <Text style={{fontSize: 23, fontWeight: "bold"}}>{card?.petAge}</Text>
              </View>

            </View>
          )}
        />
      </View>
      <View style={styles.likedislike}>
        <TouchableOpacity style={[styles.avaliatebtn, {backgroundColor: "#ee333344"}]} activeOpacity={0.4}
          onPress={() => swipeRef.current.swipeLeft()}
        >
          <Entypo name="cross" size={28} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.avaliatebtn, {backgroundColor: '#00ff0033'}]} activeOpacity={0.4}
          onPress={() => swipeRef.current.swipeRight()}
        >
          <Entypo name="heart" size={28} color="green"/>
        </TouchableOpacity>
      </View>
    </ContainerView>
  );
}
