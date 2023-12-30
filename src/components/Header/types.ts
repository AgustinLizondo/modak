import {ViewProps} from 'react-native';

export interface HeaderProps extends ViewProps {
  title: string;
  onBackPress?: () => void;
  onFavoritePress?: () => void;
}
