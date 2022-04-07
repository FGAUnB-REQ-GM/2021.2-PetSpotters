import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B66C6C",
    width: 60,
    height: 60,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  cameraIcon: {
    opacity: 0.6,
    alignSelf: 'center',
    position: 'absolute'
  },
  plusIconView: {
    position: 'relative',
    alignSelf: 'baseline'
  },
  plusIcon: {
    borderRadius: 20,
    backgroundColor: "#fff"
  }
})

export default styles