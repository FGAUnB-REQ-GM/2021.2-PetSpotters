import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  container1: {
    justifyContent: "center",
    alignItems: "center",
    height: 500,
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: "#FFD2CE",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    elevation: 4
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 26,
    color: "#B66C6C",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});


export default styles