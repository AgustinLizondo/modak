import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {DetailsScreenProps} from './types';
import ScreenContainer from '../../components/ScreenContainer';
import Header from '../../components/Header';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import artworkSlice from '../../stores/slices/artworkSlice';
import {useAppDispatch, useAppSelector} from '../../stores/hooks';
import styles from './styles';

const DetailScreen = ({
  navigation,
  route: {
    params: {artwork},
  },
}: DetailsScreenProps) => {
  const {favoriteArtworks} = useAppSelector(state => state.artwork);

  const isInFavorite = favoriteArtworks.includes(artwork);
  const imageSource = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
  const iconColor = isInFavorite ? 'red' : 'black';
  const dispatch = useAppDispatch();
  const onBackPress = () => navigation.goBack();
  const onAddToFavoritePress = () => {
    dispatch(artworkSlice.addToFavorite(artwork));
  };

  return (
    <ScreenContainer>
      <Header title="Artwork" onBackPress={onBackPress} />
      <View style={styles.imageView}>
        <Pressable
          style={[styles.imageViewButton, styles.addToFavoriteButtonView]}
          onPress={onAddToFavoritePress}>
          <FontAwesomeIcon icon={faHeart} size={24} color={iconColor} />
        </Pressable>
        <Image src={imageSource} style={styles.image} />
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.artworkTitle}>{artwork.title}</Text>
        <View>
          <Text style={styles.artworkArtist}>{artwork.artist_title}</Text>
          <Text style={styles.artistLabel}>Artist</Text>
        </View>
      </View>
      {artwork.copyright_notice && (
        <Text style={styles.copyrightText}>{artwork.copyright_notice}</Text>
      )}
    </ScreenContainer>
  );
};

export default DetailScreen;
