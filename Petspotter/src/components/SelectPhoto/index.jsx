import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import styles from "./styles";
import { NewPhotoView } from "../NewPhotoView";

export function SelectPhoto({ email, nome }) {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const [imageList, setImageList] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const refr = ref(storage, `${email}/${nome}.jpg`);

      const img = await fetch(result.uri);
      const bytes = await img.blob();
      await uploadBytes(refr, bytes).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    }
  };

  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7
      }}
      onPress={pickImage}
      activeOpacity={0.8}
    >
      {imageList && imageList.length > 0 ? (
        <Image source={{ uri: imageList[0] }} style={styles.img} />
      ) : (
        <View>
            <NewPhotoView />
          </View>
      )}
    </TouchableOpacity>
  );
}
