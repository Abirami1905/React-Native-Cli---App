import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gradient: { flex: 1 },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 30 },
  summary: { marginBottom: 30 },
  summaryText: { fontSize: 18, color: '#fff', marginBottom: 5 },
  button: { 
    width: '80%', 
    backgroundColor: '#fff', 
    paddingVertical: 14, 
    borderRadius: 25, 
    alignItems: 'center', 
    marginVertical: 5 
  },
  buttonText: { color: '#ff4e50', fontSize: 18, fontWeight: 'bold' },
});
