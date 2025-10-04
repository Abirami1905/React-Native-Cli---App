import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gradient: { flex: 1 },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 50 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 50 },
  info: { fontSize: 18, color: '#fff', marginBottom: 10 },
  button: { 
    width: '40%', 
    paddingVertical: 12, 
    borderRadius: 25, 
    alignItems: 'center', 
    alignSelf: 'flex-start' 
  },
  buttonText: { color: '#ff4e50', fontSize: 16, fontWeight: 'bold' },
});
