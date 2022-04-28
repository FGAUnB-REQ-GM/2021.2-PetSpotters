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
    width: 40,
    height: 40,
    marginLeft: 10,
    borderRadius: 100
  },
  likedislike: {
    position: "absolute",
    bottom: "3%",
    flexDirection: 'row',
    width: "100%",
    justifyContent: "space-evenly"
  },
  avaliatebtn: {
    borderRadius: 150,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  infoMotherView: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
    height: "15%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  }
})

export default styles