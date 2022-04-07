import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";

const InputSelect = ({ title, control, errors, data }) => {
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={{alignItems: 'center', margin: '2%'}}>
            <Text style={styles.text}>{title}</Text>
            <Picker
              style={styles.button}
              selectedValue={value}
              onValueChange={onChange}
            >
              {data.map((item, index) => (
                <Picker.Item
                  label={item.label}
                  value={item.value}
                  key={index}
                />
              ))}
            </Picker>
          </View>
        )}
        name={title}
      />
      {errors.title && <Text>This is required.</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 20,
    backgroundColor: "#FFD2CE",
    borderColor: "#B66C6C",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 26,
    color: "#B66C6C",
  },
});

export default InputSelect;
