import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    marginLeft: 16,
    maxWidth: 320,
    maxHeight: 520,
    borderRadius: 12,
    shadowColor: 'gray',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    backgroundColor: 'white',
    marginTop: 12,
    paddingBottom: 12,
  },
  image: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: 300,
  },
  textView: {
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 'auto',
    gap: 12,
  },
  buttonView: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  artistName: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  buttonText: {
    fontWeight: '800',
    color: 'white',
    fontSize: 14,
  },
});

export default styles;
