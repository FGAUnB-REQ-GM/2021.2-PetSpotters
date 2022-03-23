import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B66C6C",
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: "5%"
  },

  insideView: {
    backgroundColor: "#FFD2CE",
    width: "90%",
    height: "90%",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  textoExibido: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#B66C6C",
    position: "absolute"
  }
})

export default styles