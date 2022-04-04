import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  perfilText: {
    fontSize: 30,
    color: "#B66C6C",
    fontWeight: "bold"
  },
  profileImageView: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  petDescriptionView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: '13%'
  },
  button: {
    marginLeft: 15,
    elevation: 2,
    backgroundColor: "#00000000"
  },
  petDescription: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '5%',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 15
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  profilePic: {
    backgroundColor: "rgba(100, 100, 100, 0.3)",
    width: 40,
    height: 40,
    marginLeft: 10,
    borderRadius: 100
  }
})

export default styles