import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { db, storage } from "../../../firebase";
import { ContainerView, ProfileLogo, SttsBar } from "../../components";
import { useUserContext } from "../../context/ContextUser";
import styles from "./styles";

const generateId = (id1, id2) => (id1 > id2 ? id1 + id2 : id2 + id1);

export function Match() {
  const navigation = useNavigation();
  const { user, setUser } = useUserContext();
  const swipeRef = useRef(null);
  const [profiles, setProfiles] = useState([]);
  const [newUser, setNewUser] = useState({});
  console.log({ user });

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getUTCFullYear() - birthDate.getUTCFullYear();
    var month = today.getUTCMonth() - birthDate.getUTCMonth();
    if (
      month < 0 ||
      (month === 0 && today.getUTCDate() < birthDate.getUTCDate())
    ) {
      age--;
    }
    return age;
  }

  useEffect(() => {
    const imageRef = ref(storage, `${user?.data.email}/`);
    listAll(imageRef).then((list) => {
      list.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          const date = user?.data.PetdataN?.split("/");
          const newDate = date[2].concat("-", date[1], "-", date[0]);
          const age = getAge(newDate);
          setDoc(
            doc(db, "users", user?.id),
            { pic: url, PetdataN: age, id: user.id },
            {
              merge: true,
            }
          );
          user.data["id"] = user.id;
          user.data["pic"] = url;
        });
      });
    });
  }, []);

  useEffect(() => {
    let unsub;
    const fetch = async () => {
      const passes = await getDocs(
        collection(db, "users", user?.id, "passes")
      ).then((snapshot) => snapshot.docs.map((doc) => doc.id));

      const swipes = await getDocs(
        collection(db, "users", user?.id, "swipes")
      ).then((snapshot) => snapshot.docs.map((doc) => doc.id));

      const passedUserIds = passes.length > 0 ? passes : ["test"];
      const swipedUserIds = swipes.length > 0 ? swipes : ["test"];

      unsub = onSnapshot(
        query(
          collection(db, "users"),
          where("id", "not-in", [...passedUserIds, ...swipedUserIds])
        ),
        (snapshot) => {
          setProfiles(
            snapshot.docs
              .filter((doc) => doc.data().email !== user?.data.email)
              .map((doc) => {
                return {
                  id: doc.id,
                  ...doc.data(),
                };
              })
          );
        }
      );
    };
    fetch();
    return unsub;
  }, []);

  const swipeLeft = (cardIndex) => {
    console.log({ cardIndex, profiles });

    if (!profiles[cardIndex]) return;
    const userSwiped = profiles[cardIndex];
    console.log(`pass: ${userSwiped.Petnome}`);
    setDoc(doc(db, "users", user?.id, "passes", userSwiped.id), userSwiped);
  };

  const swipeRight = async (cardIndex) => {
    if (!profiles[cardIndex]) return;
    const userSwiped = profiles[cardIndex];

    const logged = await (await getDoc(doc(db, "users", user?.id))).data();

    getDoc(doc(db, "users", userSwiped.id, "swipes", user?.id)).then(
      (documentSnapshot) => {
        if (documentSnapshot.exists()) {
          console.log(`MATCH!: ${userSwiped.Petnome}`);

          setDoc(
            doc(db, "users", user?.id, "swipes", userSwiped.id),
            userSwiped
          );

          setDoc(doc(db, "matches", generateId(user?.id, userSwiped.id)), {
            users: {
              [user?.id]: logged,
              [userSwiped.id]: userSwiped,
            },
            usersMatched: [user?.id, userSwiped.id],
            timestamp: serverTimestamp(),
          });
          navigation.navigate("MatchScreen", { logged, userSwiped });
        } else {
          console.log(`right: ${userSwiped.Petnome}`);
          setDoc(
            doc(db, "users", user?.id, "swipes", userSwiped.id),
            userSwiped
          );
        }
      }
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
          <ProfileLogo style={{ marginTop: 5, marginBottom: 4 }} />
        </View>
      </View>

      <View style={{ width: "100%", height: "100%" }}>
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={profiles}
          stackSize={3}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          onSwipedLeft={(cardIndex) => {
            console.log("left");
            swipeLeft(cardIndex);
          }}
          onSwipedRight={(cardIndex) => {
            console.log("right");
            swipeRight(cardIndex);
          }}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "#4DED30",
                },
              },
            },
          }}
          renderCard={(card) => (
            <View
              style={{
                position: "relative",
                height: "77%",
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              {card?.pic ? (
                <Image
                  source={{ uri: card?.pic }}
                  style={{
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    height: "80%",
                    borderRadius: 10,
                  }}
                />
              ) : (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>Acabaram os perfis</Text>
                </View>
              )}

              <View style={[styles.infoMotherView, styles.cardShadow]}>
                <View>
                  <Text style={{ fontSize: 23, fontWeight: "bold" }}>
                    {card?.Petnome}
                  </Text>
                  <Text>{card?.Petraca}</Text>
                </View>
                <Text style={{ fontSize: 23, fontWeight: "bold" }}>
                  {card?.Petidade || card?.PetdataN}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.likedislike}>
        <TouchableOpacity
          style={[styles.avaliatebtn, { backgroundColor: "#ee333344" }]}
          activeOpacity={0.4}
          onPress={() => swipeRef.current.swipeLeft()}
        >
          <Entypo name="cross" size={28} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.avaliatebtn, { backgroundColor: "#00ff0033" }]}
          activeOpacity={0.4}
          onPress={() => swipeRef.current.swipeRight()}
        >
          <Entypo name="heart" size={28} color="green" />
        </TouchableOpacity>
      </View>
    </ContainerView>
  );
}
