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
    padding: 15,
    backgroundColor: '#cccccc', // gray background for the header
    borderRadius: 10, 
    marginBottom: 30,
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    shadowColor: '#159adcff',
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
  fontWeight: '700',
  color: '#333',
  textAlign: 'center',       // ✅ centers text horizontally
  alignSelf: 'center',       // ✅ ensures it's centered in the container
  marginBottom: 20,
  textShadowColor: 'rgba(0, 0, 0, 0.3)', // ✅ subtle shadow
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 3,
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
