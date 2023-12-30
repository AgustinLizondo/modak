import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageView: {
    flex: 1,
    borderRadius: 16,
    width: '90%',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  descriptionView: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    gap: 16,
  },
  artworkTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  artworkArtist: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artistLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'lightgray',
  },
  artworkDescription: {},
  copyrightText: {
    padding: 32,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'lightgray',
  },
  imageViewButton: {
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 100,
    opacity: 0.8,
    zIndex: 100,
    padding: 16,
  },
  openImageView: {
    left: 16,
    bottom: 16,
  },
  addToFavoriteButtonView: {
    right: 16,
    bottom: 16,
  },
});

export default styles;
