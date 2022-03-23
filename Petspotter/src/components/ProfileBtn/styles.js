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
    width: "70%",
    height: "70%",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  textoExibido: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
    position: 'relative'
  }
})

export default styles