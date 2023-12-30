import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useAppSelector} from '../../stores/hooks';
import ScreenContainer from '../../components/ScreenContainer';
import ArtwokItem from '../../components/ArtworkItem';
import Header from '../../components/Header';
import {FavoritesScreenProps} from './types';
import styles from './styles';

const FavoritesScreen = ({navigation}: FavoritesScreenProps) => {
  const {favoriteArtworks} = useAppSelector(state => state.artwork);
  const onBackPress = () => navigation.goBack();

  const renderItem = ({item}: any) => <ArtwokItem artwork={item} />;
  const renderEmptyComponent = () => (
    <View style={styles.emptyView}>
      <Text style={styles.emptyText}>
        You don't have any favorite artworks yet. Go to the home screen and add
        some!
      </Text>
    </View>
  );

  return (
    <ScreenContainer>
      <Header title="Favorites" onBackPress={onBackPress} />
      <FlatList
        data={favoriteArtworks}
        renderItem={renderItem}
        horizontal
        ListEmptyComponent={renderEmptyComponent}
      />
    </ScreenContainer>
  );
};

export default FavoritesScreen;
