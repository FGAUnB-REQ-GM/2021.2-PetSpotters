import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  perfilText: {
    fontSize: 30,
    color: "#B66C6C",
    fontWeight: "bold"
  },
  profileImageView: {
    height: '60%',
    position: 'relative',
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  petDescriptionView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    position: 'absolute',
    marginTop: '100%',  
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
    
  }
})

export default styles