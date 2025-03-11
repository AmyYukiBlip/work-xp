import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    // backgroundColor: "#fff",
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    margin: 16,
    textAlign: "center",
  },
  subTitle: {
    margin: 16,
    textAlign: "center",
  },
  body: {
    fontSize: 15,
    margin: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 12,
    paddingHorizontal: 8,
  },
  option: {
    color: "blue",
    margin: 12,
    textAlign: "center",
  },
  button: {
    margin: 12,
  },
  error: {
    color: "red",
    margin: 12,
    textAlign: "center",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  // this is my styling for searchbar, and business cards

  searchContainer: {
    padding: 10,
  },
  card: {
    // backgroundColor: "#07070A",
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
  },
  cardContent: {
    margin: 0,
    padding: 0,
  },
  cardTitle: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingRight: 0,
    paddingLeft: 0,
    textAlign: "center",
  },
  cardActions: {
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    padding: 20,
  },
  cardCover: {
    width: 320,
    height: 200,
    // resizeMode: "cover",
    alignSelf: "center",
    margin: 0,
  },
  text: {
    textAlign: "center",
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  scrollViewContent: {
    paddingBottom: 75,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 5,
  },
  proButtonContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    gap: 10,
  },
  data: {
    minHeight: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  headerContainer: {
    height: 50,
    maxHeight: 50,
    justifyContent: "center",
    textAlign: "center",
    padding: 0,
  },
});

export default styles;
