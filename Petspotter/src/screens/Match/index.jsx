import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet, LogBox } from "react-native";
import { useForm } from "react-hook-form";
import { db } from "../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import InputCadastro from "../../components/InputCadastro";

export function Match({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  LogBox.ignoreLogs(["Setting a timer"]);

  const q = query(
    collection(db, "users"),
    where("email", "==", "copatriciagalvao@gmail.com")
  );
  const querySnapshot = async () => {
    await getDocs(q).then((res) =>
      res.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      })
    );
  };
  querySnapshot();

  let data = [];

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <Text>MATCH</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  container1: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: 500,
  },
});
