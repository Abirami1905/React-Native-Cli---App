import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gradient: { flex: 1 },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 30,
    marginBottom: 15,
    fontSize: 16,
    color: '#fff',
  },
  button: {
    width: '90%',
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ff4e50',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: { marginTop: 20, fontSize: 16, color: '#fff' },
  linkText: { fontWeight: 'bold', textDecorationLine: 'underline' },
});
