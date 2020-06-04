import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 10
  },

  icon: {
    marginTop: 20,
    marginBottom: 10
  },

  nameProduct: {
    fontSize: 30,
    color: '#0A1034',
    fontWeight: 'bold'
  },

  viewImageProduct: {
    marginTop: 45,
    margin: 25,
    alignItems: 'center'
  },

  image: {
    width: 200,
    height: 200
  },

  price: {
    fontSize: 20,
    color: '#0001FC',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20
  },

  buttonEmail: {
    backgroundColor: '#0001FC',
    padding: 20,
    borderRadius: 4,
    alignItems: 'center'
  },

  buttonEmailText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  },

  buttonWhats: {
    backgroundColor: '#E0ECF8',
    padding: 20,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 20
  },

  buttonWhatsText: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
