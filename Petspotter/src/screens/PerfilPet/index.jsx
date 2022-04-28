import { useNavigation } from "@react-navigation/native";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { Pagination } from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { storage } from "../../../firebase";
import { ContainerView, ProfileLogo, SttsBar } from "../../components";
import { useUserContext } from "../../context/ContextUser";
import styles from "./styles";

export function PerfilPet() {
  const navigation = useNavigation();
  const { user, setUser } = useUserContext();
  const [images, setImages] = useState([]);
  const imageListRef = ref(storage, `${user?.data.email}/`);

  useEffect(() => {
    setImages([]);
    listAll(imageListRef).then((list) => {
      list.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImages([...images, url]);
        });
      });
    });
  }, []);

  const { width } = Dimensions.get("window");

  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate("PerfisPetEdit");
        }}
      >
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

  const paginacao = () => {
    return (
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: "#00000000" }}
        dotStyle={{
          width: 15,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "#B66C6Cee",
          shadowColor: "rgba(0, 0, 0, 0.75)",
          shadowOffset: { width: -1, height: 1 },
          shadowRadius: 20,
        }}
        inactiveDotStyle={{
          width: 15,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "rgba(255, 255, 255, 0.40)",
          shadowColor: "rgba(0, 0, 0, 0.75)",
          shadowOffset: { width: -1, height: 1 },
          shadowRadius: 15,
        }}
        inactiveDotScale={0.6}
      />
    );
  };

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
      <Image
        style={{ flex: 1, width: "80%", height: "80%" }}
        resizeMode="contain"
        source={{ uri: user?.data.pic }}
      />
      <View style={styles.profileImageView}>
        <View style={styles.petDescriptionView}>
          <Text style={[styles.petDescription, { fontSize: 30 }]}>
            {user?.data.Petnome}
          </Text>
          <Text style={[styles.petDescription]}>{user?.data.PetdataN}</Text>
          <Text style={styles.petDescription}>{user?.data.Petraca}</Text>
        </View>
      </View>
    </ContainerView>
  );
}
