import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  headerText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#4A80F0',
    marginBottom: 30,
    textAlign: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  inputField: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  addBtn: {
    marginLeft: 10,
    backgroundColor: '#4A80F0',
    borderRadius: 25,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },

  taskList: {
    flex: 1,
    marginTop: 10,
  },

  taskItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },

  taskText: {
    fontSize: 16,
    color: '#333',
  },

  backBtn: {
    width: '100%',
    height: 45,
    backgroundColor: '#FF6B6B',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 90,
  },

  backBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default styles;
