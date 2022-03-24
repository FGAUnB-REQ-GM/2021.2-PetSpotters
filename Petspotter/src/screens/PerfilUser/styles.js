import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ 
  perfilText: {
    fontSize: 30,
    color: "#B66C6C",
    fontWeight: "bold"
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20
  },
  inputBoxView: {
    margin: 10
  },
  inputBox: {
    height: 40,
    width: 250,
    borderWidth: 1,
    padding: 10,
  },
  inputBoxLabel: {
    marginBottom: 5,
    color: "#B66C6C",
    fontWeight: "bold"
  }
})

export default styles