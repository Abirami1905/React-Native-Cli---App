import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 40,
    color: '#212121',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
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
  },
  signUpBtn: {
    width: '100%',
    height: 45,
    backgroundColor: '#115DFC',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpBtnText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#8B8E98',
    fontSize: 14,
  },
  loginLink: {
    color: '#4A80F0',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default styles;
