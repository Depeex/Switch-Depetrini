import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 25,
  },
  cardIdentification: {
    shadowOpacity: 0.5,
    elevation: 5,
    backgroundColor: '#fff',
    height: '40%',
    width: '90%',
  },
  userName: {
    fontFamily: 'Anton-Regular',
    marginHorizontal: '8%',
    marginTop: 7,
    fontSize: 16,
  },
  userAge: {
    marginHorizontal: '8%',
    marginTop: 7,
    fontWeight: 'bold',
    fontSize: 16,
  },
  userBiography: {
    marginHorizontal: '8%',
    marginTop: 7,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
