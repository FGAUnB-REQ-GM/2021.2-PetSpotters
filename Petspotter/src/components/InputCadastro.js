import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, TextInput } from "react-native";

const InputCadastro = ({ title, control, errors }) => {
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Text style={styles.text}>{title}</Text>
            <TextInput
              style={styles.button}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={title == "SENHA" && true}
            />
          </>
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
    height: 50,
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
    fontSize: 14,
    lineHeight: 26,
    color: "#B66C6C",
  },
});

export default InputCadastro;
