import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 80,
    paddingHorizontal: 80,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 11,
    backgroundColor: '#8dcaeeff',
    marginBottom: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#212121',
  },
  subtitle: {
    fontSize: 12,
    color: '#8B8E98',
    textAlign: 'center',
    marginTop: 5,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
    marginTop: 5,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0b0b0bff',
    marginBottom: 15,
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: '#111010ff',
    borderRadius: 7,
    paddingHorizontal: 10,
    textShadowColor: '#111010ff',
  },
  signInBtn: {
    width: '100%',
    height: 40,
    backgroundColor: '#8dcaeeff',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
  },
  signInBtnText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#110f0fff',
    marginBottom: 20,
    //marginTop: 30,
  },
  separatorText: {
    color: '#110f0fff',
    marginHorizontal: 10,
    //olor: '#8B8E98',
    marginBottom: 30,
    //marginTop: 30,
  },
  signInGgl: {
    width: '100%',
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#070707ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    
  },
  signInApl: {
    width: '100%',
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#111010ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
    color: '#8B8E98',
  },
  note: {
    fontSize: 12,
    color: '#0e0e0eff',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default styles;
