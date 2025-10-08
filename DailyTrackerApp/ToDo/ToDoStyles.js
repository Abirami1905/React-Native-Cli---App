import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  // Header Bar
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#cccccc', // gray header background
    borderRadius: 10,
    marginBottom: 30,
  },

  HeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },

  profileBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },

  profileImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  // Input Row
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },

  addBtn: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft: 10,
  },

  addBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Task Item Row
  taskItem: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: 'row',            // ⬅️ Align text & delete button horizontally
    justifyContent: 'space-between', // ⬅️ Space between text and delete button
    alignItems: 'center',
  },

  taskText: {
    fontSize: 16,
    color: '#333',
  },

  // Completed Task Style
  completedTask: {
    backgroundColor: '#d4edda',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },

  // Delete Button
  deleteBtn: {
    backgroundColor: '#ff4444',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  deleteBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },

  // Back Button
  backBtn: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF6B6B',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    marginBottom: 60,
    marginTop: 60,
  },

  backBtnTxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
