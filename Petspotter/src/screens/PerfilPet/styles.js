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
    backgroundColor: '#00000043'
  },
  petDescriptionView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    position: 'absolute',
    marginTop: '130%',
    backgroundColor: '#B66C6C43',
    
  },
  petDescription: {
    color: '#B66C6C',
    fontSize: 24,
    
  }
})

export default styles