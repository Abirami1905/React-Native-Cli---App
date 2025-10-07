import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'space-between',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  headerText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#4A80F0',
  },

  profileBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },

  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },

  quoteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //marginBottom: 25,
  },

  quoteIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },

  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
    flexShrink: 1,
  },

  mainBtn: {
    width: '100%',
    height: 50,
    backgroundColor: '#4A80F0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    //marginBottom: 40,
  },

  mainBtnText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },

  backBtn: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF6B6B',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    marginTop: 90,
  },

  backBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
