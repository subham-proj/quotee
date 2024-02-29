import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF7F1",
  },
  input: {
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    height: 50,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#E6A4B4",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonText: {
    color: "#F5EEE6",
    fontSize: 20,
    textAlign: "center",
  },
  graphicImageContainer: {},
  graphicImage: {
    width: 400,
    height: 400,
    resizeMode: "contain",
  },
  home:{
    flex:1,
    backgroundColor: "#E1F0DA",
  },
  homeHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  userImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  greetAndName: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  greetStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  username: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#B784B7",
  },
  customCardContainer : {
    alignItems:"center",
    marginTop:30,
    marginLeft : 20,
    marginRight: 20,
    marginBottom:30,
  },
  customCard: {
    width: "95%",
    height: 350,
    backgroundColor: "white",
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    fontSize: 20,
  },
  content: {
    color:"#35374B",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
  },
  shareButtonContainer:{
    marginTop:40,
    justifyContent:"center",
    alignItems:"center"
  },
  shareButton: {
    width:"60%",
    flexDirection: 'row',
    justifyContent:"center",
    alignItems: 'center',
    backgroundColor: '#25D366', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  shareButtonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default styles;
