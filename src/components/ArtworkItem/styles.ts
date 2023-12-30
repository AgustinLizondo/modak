import {Platform, StyleSheet} from 'react-native';

const shadowColor = 'rgba(134, 134, 134, 0.3)';
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    borderRadius: 12,
    shadowOpacity: 1,
    shadowOffset: {width: 1, height: 1},
    ...Platform.select({
      ios: {
        shadowColor,
      },
      android: {
        elevation: 2,
      },
    }),
    backgroundColor: 'white',
    paddingBottom: 12,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 6,
    marginBottom: 6,
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
    maxWidth: '80%',
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
