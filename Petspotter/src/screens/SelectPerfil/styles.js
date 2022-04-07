import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  perfilText: {
    fontSize: 30,
    color: "#B66C6C",
    fontWeight: "bold",
  },
  img: {
    resizeMode: "cover",
    position: "absolute",
    borderRadius: 7,
    width: '100%',
    height: '100%',
  },
  backButton: {
    backgroundColor: "#B66C6C",
    width: 150,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: '20%',
    elevation: 3,
  },
  userEditBtn: {
    backgroundColor: "#B66C6C",
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: "15%",
    marginBottom: "5%",
    elevation: 5
  },
  userEditText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#f9f9f9",
    position: "relative",
  }
});

export default styles;
