import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardStyle: {
    justifyContent: 'center',
    backgroundColor: '#00BFFF',
    borderRadius: 10,
    height: '95%',
    width: 350,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  backScroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  frontText: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontFamily: 'Savoye Let',
    fontSize: 40,
    marginHorizontal: 10,
    color: '#000000',
  },
  backText: {
    textAlign: 'center',
    fontFamily: 'Savoye Let',
    fontSize: 30,
    marginTop: 10,
    marginHorizontal: 10,
    color: '#000000',
  },
  buttonStyle: {
    marginTop: 10,
    width: '50%',
    alignContent: 'center',
    alignSelf: 'center',
  }
});