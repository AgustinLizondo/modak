import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {HeaderProps} from './types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faHeart} from '@fortawesome/free-solid-svg-icons';
import styles from './styles';

const Header = (props: HeaderProps) => {
  const {title, onBackPress, onFavoritePress, ...rest} = props;
  return (
    <View style={styles.headerView} {...rest}>
      <View style={styles.innerHeaderView}>
        {onBackPress && (
          <Pressable onPress={onBackPress}>
            <FontAwesomeIcon icon={faChevronLeft} size={24} />
          </Pressable>
        )}
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      {onFavoritePress && (
        <Pressable onPress={onFavoritePress}>
          <FontAwesomeIcon icon={faHeart} size={32} />
        </Pressable>
      )}
    </View>
  );
};

export default Header;
