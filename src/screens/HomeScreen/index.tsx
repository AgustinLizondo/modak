import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import Header from '../../components/Header';
import {useAppDispatch, useAppSelector} from '../../stores/hooks';
import {HomeScreenProps} from './types';
import artworkSlice from '../../stores/slices/artworkSlice';
import ArtwokItem from '../../components/ArtworkItem';
import styles from '../FavoritesScreen/styles';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const onFavoritePress = () => navigation.navigate('Favorites');
  const dispatch = useAppDispatch();

  const {artworks} = useAppSelector(state => state.artwork);

  useEffect(() => {
    dispatch(artworkSlice.getArtwork());
  }, [dispatch]);

  const onEndReached = () => {
    dispatch(artworkSlice.getMoreArtwork());
  };

  const renderItem = ({item}: any) => {
    const onArtworkItemPress = () => {
      navigation.navigate('Detail', {artwork: item});
    };

    return <ArtwokItem artwork={item} onPress={onArtworkItemPress} />;
  };
  const renderEmptyComponent = () => (
    <View style={styles.emptyView}>
      <Text style={styles.emptyText}>
        We don't have any artworks yet. Please try again later.
      </Text>
    </View>
  );

  return (
    <ScreenContainer>
      <Header title="Browse" onFavoritePress={onFavoritePress} />
      <FlatList
        numColumns={2}
        data={artworks}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyComponent}
        onEndReached={onEndReached}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;
