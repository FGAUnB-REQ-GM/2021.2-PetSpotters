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
    borderWidth: 2,
    padding: 10,
    backgroundColor: "#FFD2CE",
    borderRadius: 10,
    borderColor: "#B66C6C"
  },
  inputBoxLabel: {
    marginBottom: 5,
    color: "#B66C6C",
    fontWeight: "bold"
  },
  saveBtn: {
    position: "relative",
    borderWidth: 2,
    backgroundColor: "#FFD2CE",
    borderRadius: 10,
    borderColor: "#B66C6C",
    width: 100,
    height: 36,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 23
  }
})

export default styles