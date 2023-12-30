import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {ArtworkItemProps} from './types';
import {useAppDispatch, useAppSelector} from '../../stores/hooks';
import styles from './styles';
import artworkSlice from '../../stores/slices/artworkSlice';
import PushNotification from 'react-native-push-notification';

const ArtwokItem = (props: ArtworkItemProps) => {
  const {artwork, ...rest} = props;
  const {favoriteArtworks} = useAppSelector(state => state.artwork);

  const imageSource = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
  const isInFavorite = favoriteArtworks.includes(artwork);
  const dispatch = useAppDispatch();

  const onAddToFavoritesPress = () => {
    if (!isInFavorite) {
      PushNotification.localNotification({
        title: 'Artwork added to favorites',
        channelId: '1',
        message: `Your artwork ${artwork.title} has been added to favorites`,
      });
      dispatch(artworkSlice.addToFavorite(artwork));
    } else {
      dispatch(artworkSlice.removeFromFavorite(artwork.id));
    }
  };

  if (!artwork.image_id) {
    return null;
  }

  const iconColor = isInFavorite ? 'red' : 'black';
  const buttonText = isInFavorite
    ? 'Remove from favorites'
    : 'Add to favorites';

  return (
    <Pressable style={styles.mainView} {...rest}>
      <Image src={imageSource} style={styles.image} />
      <View style={styles.textView}>
        <Text style={styles.artistName}>{artwork.artist_title}</Text>
        <Text>{artwork.title}</Text>
        <Text numberOfLines={2}>{artwork.description}</Text>
      </View>
      <View style={styles.bottomView}>
        <Pressable style={styles.buttonView} onPress={onAddToFavoritesPress}>
          <Text numberOfLines={1} style={styles.buttonText}>
            {buttonText}
          </Text>
        </Pressable>
        <FontAwesomeIcon icon={faHeart} size={24} color={iconColor} />
      </View>
    </Pressable>
  );
};

export default ArtwokItem;
