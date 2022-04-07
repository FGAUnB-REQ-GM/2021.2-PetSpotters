import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  container1: {
    marginTop: "10%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: "#FFD2CE",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
    elevation: 4
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 26,
    color: "#B66C6C",
  },
  img: {
    resizeMode: "cover",
    position: "absolute",
    borderRadius: 30,
    borderColor: "#000",
    width: 200,
    height: 150,
  },
});


export default styles