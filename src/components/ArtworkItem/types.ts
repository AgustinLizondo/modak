import {PressableProps} from 'react-native';
import {Artwork} from '../../stores/types.ts/artwork';

export interface ArtworkItemProps extends PressableProps {
  artwork: Artwork;
}
