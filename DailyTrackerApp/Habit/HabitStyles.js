import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  Header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#cccccc",
    marginBottom: 30,
    borderRadius: 10,
  },

  HeaderTxt: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },

  ProfileBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
  },

  ProfileBtnImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },

  input: {
    borderWidth: 1,
    flex: 1,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
    borderColor: "#ccc",
  },

  addBtn: {
    backgroundColor: "#FF6B6B",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft: 10,
  },

  addBtnTxt: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  habitItem: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  habitText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },

  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  dayCircle: {
    width: 35,
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  dayDone: {
    backgroundColor: "#4CAF50", // green for done
  },

  dayPending: {
    backgroundColor: "#E0E0E0", // grey for not done
  },

  dayText: {
    fontWeight: "600",
    color: "#000",
  },

  BackBtn: {
    width: "100%",
    height: 50,
    backgroundColor: "#FF6B6B",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginBottom: 60,
    marginTop: 60,
  },

  BackBtnTxt: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default styles;
