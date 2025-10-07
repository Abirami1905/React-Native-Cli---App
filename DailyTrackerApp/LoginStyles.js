import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,  // fills full screen
    justifyContent: 'center',  
    alignItems: 'center', 
    backgroundColor: '#ffffff',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 45,
    color: '#212121',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 25,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#8B8E98',
    marginBottom: 5,
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 7,
    paddingHorizontal: 10,
    color: '#000000',
    paddingVertical: 10
  },
  signInBtn: {
    width: '100%',
    height: 45,
    backgroundColor: '#115DFC',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  signInBtnText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },

  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#8B8E98',
    fontSize: 14,
  },
  signUpLink: {
   color: '#4A80F0',
   fontSize: 14,
   fontWeight: '600',
  },

  note: {
    fontSize: 15,
    color: '#8B8E98',
    textDecorationLine: 'underline',
    marginTop: 85,
  },
});

export default styles;
