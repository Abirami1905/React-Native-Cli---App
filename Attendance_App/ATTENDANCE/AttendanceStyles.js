import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gradient: { flex: 1 },
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 20, textAlign: 'center' },
  studentRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  studentName: { fontSize: 18, color: '#fff', flex: 1 },
  attendanceBtn: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 20, marginHorizontal: 5 },
  attendanceText: { color: '#fff', fontWeight: 'bold' },
  button: { 
    width: '40%', 
    paddingVertical: 12, 
    borderRadius: 25, 
    alignItems: 'center', 
    alignSelf: 'flex-start' 
  },
  buttonText: { color: '#ff4e50', fontSize: 16, fontWeight: 'bold' },
});
